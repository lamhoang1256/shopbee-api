/** Lấy thông tin chi tiết người dùng
 * @swagger
 * /user/{id}:
 *  get:
 *      summary: Lấy thông tin chi tiết người dùng
 *      tags: [User]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: User ID
 *      responses:
 *          200:
 *              description: Success
 */
