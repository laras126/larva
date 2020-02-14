const clonedeep = require( 'lodash.clonedeep' );

const o_email_capture_form_minimal = clonedeep( require( '../../objects/o-email-capture-form/o-email-capture-form.minimal' ) );
const c_title = clonedeep( require( '../../components/c-title/c-title.prototype' ) );
const c_tagline = clonedeep( require( '../../components/c-tagline/c-tagline.prototype' ) );

c_title.c_title_url = false;
c_title.c_title_text = 'Stay In The Know';
c_title.c_title_classes = 'lrv-u-margin-b-025 lrv-u-font-family-primary lrv-u-text-align-center';

c_tagline.c_tagline_text = 'Sign up for our daily newsletter';
c_tagline.c_tagline_classes = 'lrv-u-font-size-14 u-font-style-italic lrv-u-font-family-basic lrv-u-text-align-center';

o_email_capture_form.c_button.c_button_classes += ' lrv-a-icon-invert';

module.exports = {
	footer_newsletter_classes: 'lrv-u-text-align-center lrv-u-color-white lrv-u-background-color-black lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center',
	c_title: c_title,
	c_tagline: c_tagline,
	o_email_capture_form: o_email_capture_form_minimal
};
