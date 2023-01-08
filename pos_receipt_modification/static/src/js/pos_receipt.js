odoo.define('pos_receipt_modification.receipt', function (require) {
"use strict";
var models = require('point_of_sale.models');
models.load_fields('product.product', 'default_code');

var _super_orderline = models.Orderline.prototype;
models.Orderline = models.Orderline.extend({
    export_for_printing: function() {
        var line = _super_orderline.export_for_printing.apply(this,arguments);
        line.default_code = this.get_product().default_code;
        return line;
    },
});

});