/** Xóa nhận xét
 * @swagger
 * /review/{id}:
 *  delete:
 *      summary: Xóa nhận xét
 *      tags: [Review]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Review ID
 *      responses:
 *          200:
 *              description: Success
 */
