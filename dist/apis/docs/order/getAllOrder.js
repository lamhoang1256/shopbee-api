"use strict";
/** Lấy tất cả đơn hàng
 * @swagger
 * /order:
 *  get:
 *      summary: Lấy tất cả đơn hàng
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *           type: number
 *        - in: query
 *          name: limit
 *          schema:
 *            type: number
 *        - in: query
 *          name: status
 *          schema:
 *            type: string
 *        - in: query
 *          name: orderId
 *          schema:
 *            type: string
 *      responses:
 *          200:
 *              description: Success
 */
