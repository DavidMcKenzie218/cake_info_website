var context = require.context('./src/components/specs/', true, /-test\.js$/); 
context.keys().forEach(context);