import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 lite scaffold" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !(function(c,b,d,a){c[a]||(c[a]={});c[a].config={pid:"ddjdh7curk@77ec8bc1d8b7251",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:true,behavior:false,disableHook:true,useFmp:true};with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)})(window,document,"https://sdk.rum.aliyuncs.com/v1/bl.js","__bl");
            `,
          }}
        />
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
