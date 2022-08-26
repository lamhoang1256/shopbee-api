"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      required:
 *        - quantity
 *      properties:
 *        user:
 *          type: string
 *          description: userId của giỏ hàng
 *        product:
 *          $ref: '#/components/schemas/Product'
 *        quantity:
 *          type: number
 *          description: Số lượng sản phẩm này trong giỏ hàng
 *
 */
