sap.ui.define([
	'sap/ui/core/Control',
	'sap/m/RatingIndicator',
	'sap/m/Label',
	'sap/m/Button'
], function (Control, RatingIndicator, Label, Button) {
    'use strict';
    return Control.extend('webpack.lib.ProductRating', {

        metadata : {
			properties : {
				value: 	{type : 'float', defaultValue : 0}
			},
			aggregations : {
				_rating : {type : 'sap.m.RatingIndicator', multiple: false, visibility : 'hidden'},
				_label : {type : 'sap.m.Label', multiple: false, visibility : 'hidden'},
				_button : {type : 'sap.m.Button', multiple: false, visibility : 'hidden'}
			},
			events : {
				change : {
					parameters : {
						value : {type : 'int'}
					}
				}
			}
        },

		init : function () {
			this.setAggregation('_rating', new RatingIndicator({
				value: this.getValue(),
				iconSize: '2rem',
				visualMode: 'Half',
				liveChange: this._onRate.bind(this)
			}));
			this.setAggregation('_label', new Label({
				text: '{i18n>productRatingLabelInitial}'
			}).addStyleClass('sapUiSmallMargin'));
			this.setAggregation('_button', new Button({
				text: '{i18n>productRatingButton}',
				press: this._onSubmit.bind(this)
			}).addStyleClass('sapUiTinyMarginTopBottom'));
		},

		setValue: function (fValue) {
			this.setProperty('value', fValue, true);
			this.getAggregation('_rating').setValue(fValue);
		},

		reset: function () {
			let oResourceBundle = this.getModel('i18n').getResourceBundle();

			this.setValue(0);
			this.getAggregation('_label').setDesign('Standard');
			this.getAggregation('_rating').setEnabled(true);
			this.getAggregation('_label').setText(oResourceBundle.getText('productRatingLabelInitial'));
			this.getAggregation('_button').setEnabled(true);
		},

		_onRate : function (oEvent) {
			let oRessourceBundle = this.getModel('i18n').getResourceBundle();
			let fValue = oEvent.getParameter('value');

			this.setProperty('value', fValue, true);

			this.getAggregation('_label').setText(oRessourceBundle.getText('productRatingLabelIndicator', [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation('_label').setDesign('Bold');
		},

		_onSubmit : function (oEvent) {
			let oResourceBundle = this.getModel('i18n').getResourceBundle();

			this.getAggregation('_rating').setEnabled(false);
			this.getAggregation('_label').setText(oResourceBundle.getText('productRatingLabelFinal'));
			this.getAggregation('_button').setEnabled(false);
			this.fireEvent('change', {
				value: this.getValue()
			});
        },
        
        renderer : function (oRM, oControl) {
			oRM.openStart('div', oControl);
			oRM.class('myAppDemoWTProductRating');
			oRM.openEnd();
			oRM.renderControl(oControl.getAggregation('_rating'));
			oRM.renderControl(oControl.getAggregation('_label'));
			oRM.renderControl(oControl.getAggregation('_button'));
			oRM.close('div');
        }

    });
});