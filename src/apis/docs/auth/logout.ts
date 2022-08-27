/** Đăng xuất
 * @swagger
 * /auth/logout:
 *  post:
 *    summary: Đăng xuất
 *    tags: [Auth]
 *    parameters:
 *       - in: query
 *         name: refreshToken
 *         required: true
 *         schema:
 *           type: string
 *           description: refreshToken để xóa refreshToken trong database
 *    responses:
 *       200:
 *         description: Success
 */
