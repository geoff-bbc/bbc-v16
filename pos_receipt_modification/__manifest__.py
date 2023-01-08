# -*- coding: utf-8 -*-
{
    'name': 'POS Receipt Modification',
    'summary': 'POS Receipt Modification',
    'description': """
        This module add internal reference in pos receipt.
    """
    ,
    'version': '16.0.0.1',
    'author': 'OYBI',
    'website': 'https://www.oybi.com',
    'depends': [
        'base', 'point_of_sale'
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_receipt_modification/static/src/js/**/*',
        ],
        'web.assets_qweb': [
            'pos_receipt_modification/static/src/xml/**/*',
        ],
    },
    'application': False,
    'installable': True,
    'license': 'OPL-1',
}
