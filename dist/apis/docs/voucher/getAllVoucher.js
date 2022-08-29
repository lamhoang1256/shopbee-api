"use strict";
/** Lấy tất cả voucher
 * @swagger
 * /order:
 *  get:
 *      summary: Lấy tất cả voucher
 *      tags: [Voucher]
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
 *          name: code
 *          schema:
 *            type: string
 *      responses:
 *          200:
 *              description: Success
 */
