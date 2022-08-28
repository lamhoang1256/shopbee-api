"use strict";
/** Xóa người dùng
 * @swagger
 * /user/{id}:
 *  delete:
 *      summary: Xóa người dùng
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
