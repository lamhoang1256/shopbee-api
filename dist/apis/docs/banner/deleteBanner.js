"use strict";
/** Xóa banner
 * @swagger
 * /banner/{id}:
 *  delete:
 *      summary: Xóa banner
 *      tags: [Banner]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Banner ID
 *      responses:
 *          200:
 *              description: Success
 */
