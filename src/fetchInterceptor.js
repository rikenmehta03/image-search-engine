import fetchIntercept from 'fetch-intercept';

export const fetchInterceptor = () => {
    const unregister = fetchIntercept.register({
        request: function (url, config) {
            const token = localStorage.getItem('token');
            if (config) {
                if (config.headers) {
                    config.headers['x-access-tokens'] = token;
                } else {
                    config.headers = {
                        'x-access-tokens': token
                    }
                }
            } else {
                config = {
                    headers: {
                        'x-access-tokens': token
                    }
                };
            }
            return [url, config];
        },

        requestError: function (error) {
            // Called when an error occurred during another 'request' interceptor call
            return Promise.reject(error);
        },

        response: function (response) {
            // Modify the response object
            return response;
        },

        responseError: function (error) {
            // Handle an fetch error
            return Promise.reject(error);
        }
    });

    return {
        unregister
    };
}