var context = require.context('./src', true, /-specs\.js$/); 
context.keys().forEach(context);