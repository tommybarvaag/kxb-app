export const getFeedbackEmailTemplate = (name: string, message: string, email: string): string => {
  return `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        <style>
    @media only screen and (max-width: 620px) {
      table.body h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
    
      table.body p,
    table.body ul,
    table.body ol,
    table.body td,
    table.body span,
    table.body a {
        font-size: 16px !important;
      }
    
      table.body .wrapper,
    table.body .article {
        padding: 10px !important;
      }
    
      table.body .content {
        padding: 0 !important;
      }
    
      table.body .container {
        padding: 0 !important;
        width: 100% !important;
      }
    
      table.body .main {  }
    
      table.body .btn table {
        width: 100% !important;
      }
    
      table.body .btn a {
        width: 100% !important;
      }
    
      table.body .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }
    @media all {
      .ExternalClass {
        width: 100%;
      }
    
      .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
      }
    
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
    
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
    
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
      </head>
      <body class="" style="background-color: #000000; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; width: 100%;" width="100%" bgcolor="#000000">
          <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                <table role="presentation" class="logo" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #000000; width: 100%; padding-top: 24px; padding-bottom: 24px;" width="100%">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 10px; padding-top: 10px;" valign="top">
                      <img class="logo-image" src="https://kxb.app/logo-white.png" width="150" height="auto" alt="Logo" style="border: none; -ms-interpolation-mode: bicubic; display: block; margin: 0 auto; max-width: 140px; height: auto;">
                    </td>
                  </tr>
                </table>
                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #121212; border-radius: 4px; box-shadow: 0 0 0 1px #333333; width: 100%;" width="100%">
                  <!-- START MAIN CONTENT AREA -->
                  <tr>
                    <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                            <p style="color: #ffffff; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>
                            <p style="color: #ffffff; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">We recieved new feedback from ${name} with email ${email}.</p>
                            <p style="color: #ffffff; font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->
                <!-- START FOOTER -->
                <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                    <tr>
                      <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                        <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Knowit Experience Bergen AS, Nøstegaten 58, 5011 Bergen</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                        <a href="httphttps://kxb.app/" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">kxb.app</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- END FOOTER -->
              </div>
            </td>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>`;
};
