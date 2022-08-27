"use strict";
/** Cập nhật thông tin shop
 * @swagger
 * /shop:
 *  put:
 *      summary: Cập nhật thông tin shop
 *      tags: [Shop]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   name:
 *                     type: string
 *                     example: Shopbee
 *                   avatar:
 *                     type: string
 *                     example: "https://cf.shopee.vn/file/7e9937cacf72e13c019d8e6f167fa379_tn"
 *                   city:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                     example:
 *                       id: 46
 *                       name: TP. Hồ Chí Minh
 *                   district:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                     example:
 *                       id: 784
 *                       name: Huyện Hóc Môn
 *                   ward:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                     example:
 *                       id: 27568
 *                       name: Xã Đông Thạnh
 *                   street:
 *                     type: string
 *                     example: 101/20, Hương Lộ 80B, Tổ 1, Ấp 4
 *                   address:
 *                     type: string
 *                     example: 101/20, Hương Lộ 80B, Tổ 1, Ấp 4, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ Chí Minh
 *      responses:
 *          200:
 *              description: Success
 */
