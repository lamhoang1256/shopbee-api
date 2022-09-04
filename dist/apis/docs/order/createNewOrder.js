"use strict";
/** Tạo đơn hàng mới
 * @swagger
 * /order:
 *  post:
 *      summary: Tạo đơn hàng mới
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - orderItems
 *                  - price
 *                  - promotion
 *                  - shippingFee
 *                  - shippingTo
 *                  - total
 *                properties:
 *                  orderItems:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        product:
 *                          type: string
 *                        quantity:
 *                          type: number
 *                        stock:
 *                          type: number
 *                      example:
 *                        product: 6309ddf6ababc1783117dbc3
 *                        quantity: 1
 *                        stock: 121
 *                  shippingFrom:
 *                    type: string
 *                    example: 101/20, Hương Lộ 80B, Tổ 1, Ấp 4, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ Chí Minh
 *                  shippingTo:
 *                    type: string
 *                    example: 257/31/313 Lê Văn Hưu, Xã Tiên Lữ, Huyện Lập Thạch, Tỉnh Vĩnh Phúc
 *                  voucherCode:
 *                    type: string
 *                    example:
 *                  price:
 *                    type: number
 *                    example: 22600000
 *                  shippingFee:
 *                    type: number
 *                    example: 53000
 *                  promotion:
 *                    type: number
 *                    example: 0
 *                  total:
 *                    type: number
 *                    example: 22653000
 *                  methodPayment:
 *                    type: string
 *                    example: money
 *                  note:
 *                    type: string
 *                    example: Nhớ giao hàng vào thứ 7, chủ nhật nha Shop
 *      responses:
 *          200:
 *              description: Success
 */
