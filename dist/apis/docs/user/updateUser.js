"use strict";
/** Cập nhật thông tin bản thân
 * @swagger
 * /user:
 *  put:
 *      summary: Cập nhật thông tin bản thân
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   email:
 *                     type: string
 *                     example: user@example.com
 *                   fullname:
 *                     type: string
 *                     example: Nguyễn Hoàng Lâm
 *                   avatar:
 *                     type: string
 *                     example: https://avatars.githubusercontent.com/u/61537853"
 *                   phone:
 *                     type: string
 *                     example: 0809848640
 *                   password:
 *                     type: string
 *                     example: 11111111
 *                   isAdmin:
 *                     type: boolean
 *                     example: false
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
