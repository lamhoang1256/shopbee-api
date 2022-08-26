"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    Cart:
 *      type: object
 *      required:
 *        - quantity
 *      properties:
 *        user:
 *          $ref: '#/components/schemas/User'
 *        product:
 *          $ref: '#/components/schemas/Product'
 *        quantity:
 *          type: number
 *          description: Số lượng sản phẩm này trong giỏ hàng
 *
 */
