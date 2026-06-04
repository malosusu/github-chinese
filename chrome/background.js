chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message?.type !== 'ghcn-proxy-fetch') return true;

    const { url, method, headers, body } = message.payload || {};
    if (!url) {
        sendResponse({ ok: false, status: 0, statusText: '', body: '', error: '缺少 URL' });
        return true;
    }

    const fetchOptions = {
        method: method || 'GET',
        headers: { ...headers },
    };

    if (body && method !== 'GET') {
        fetchOptions.body = body;
    }

    fetch(url, fetchOptions)
        .then(async (response) => {
            const bodyText = await response.text();
            sendResponse({
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                body: bodyText,
                error: '',
            });
        })
        .catch((error) => {
            sendResponse({
                ok: false,
                status: 0,
                statusText: '',
                body: '',
                error: error.message || '网络请求失败',
            });
        });

    return true;
});
