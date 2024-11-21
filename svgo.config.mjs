export default {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // disable a default plugin
            cleanupIds: false,
  
            // customize the params of a default plugin
            inlineStyles: {
              onlyMatchedOnce: false,
            },
          },
        },
      },
    ],
  };