export default function NewsletterForm() {
    return (
      <div id="mc_embed_signup" dangerouslySetInnerHTML={{
        __html: `
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
        <style type="text/css">
                #mc_embed_signup{background:#000; false;clear:left; font:14px Verdana,Geneva,sans-serif; width: px; display: flex;flex-direction: column;justify-content: center; align-items: center; }
                #mc-embedded-subscribe{background:#fff !important; color:#000 !important; border: 2px solid white !important; border-radius: 12px !important; font-size: 16px !important; display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    }
                #mc-embedded-subscribe:hover{background:#000 !important; color:#fff !important; border: 2px solid white !important;}
                h1 {
                    text-align: center;
                }
                #mc_embed_signup .indicates-required {
                    font-size:15px
                }
                #mc_embed_signup .mc-field-group {
                    font-size: 18px
                }
        </style>
        <div id="mc_embed_signup">
            <form action="https://stemquestdiscovery.us13.list-manage.com/subscribe/post?u=6f01630434eff0656245cdc4c&amp;id=d7550fdbf0&amp;f_id=003cb4e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll"><h1>Subscribe to our Mailing List!</h1>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div><div class="mc-field-group"><label for="mce-FNAME">First Name <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name <span class="asterisk">*</span></label><input type="text" name="LNAME" class="required text" id="mce-LNAME" required="" value=""></div>
        <div hidden=""><input type="hidden" name="tags" value="6978531"></div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                </div>
            <div aria-hidden="true" style="position: absolute; left: -5000px;">
                /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                <input type="text" name="b_6f01630434eff0656245cdc4c_d7550fdbf0" tabindex="-1" value="">
            </div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                        <p style="margin: 0px auto;"><a href="http://eepurl.com/iwFxjw" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: black; border-radius: 4px;"><img class="refferal_badge" src="https://cdn-images.mailchimp.com/monkey_rewards/intuit-mc-rewards-no-bg-1.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                    </div>
                </div>
            </div>
        </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
        `
      }}/>
    );
  }
  