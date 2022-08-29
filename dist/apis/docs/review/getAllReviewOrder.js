"use strict";
/** Lấy tất cả nhận xét theo id đơn hàng
 * @swagger
 * /review/order/:id:
 *  get:
 *      summary: Lấy tất cả nhận xét theo id đơn hàng
 *      tags: [Review]
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Order ID
 *      responses:
 *          200:
 *              description: Success
 */
