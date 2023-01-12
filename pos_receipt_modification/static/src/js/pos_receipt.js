odoo.define('pos_receipt_modification.receipt', function (require) {
"use strict";

var { Orderline } = require('point_of_sale.models');
const Registries = require('point_of_sale.Registries');


const PrmOrderLine = (Orderline) => class PrmOrderLine extends Orderline {
    export_for_printing() {
        var line = super.export_for_printing(...arguments);
        line.default_code = this.get_product().default_code;
        return line;
    }
}
Registries.Model.extend(Orderline, PrmOrderLine);

});