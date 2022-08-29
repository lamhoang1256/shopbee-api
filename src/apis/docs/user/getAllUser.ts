/** Lấy tất cả người dùng
 * @swagger
 * /user:
 *  get:
 *      summary: Lấy tất cả người dùng
 *      tags: [User]
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
 *          name: email
 *          schema:
 *            type: string
 *      responses:
 *          200:
 *              description: Success
 */
