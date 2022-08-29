"use strict";
/** Lấy tất cả sản phẩm
 * @swagger
 * /product:
 *  get:
 *      summary: Lấy tất cả sản phẩm
 *      tags: [Product]
 *      parameters:
 *          - in: query
 *            name: name
 *            schema:
 *              type: number
 *          - in: query
 *            name: page
 *            schema:
 *              type: number
 *          - in: query
 *            name: limit
 *            schema:
 *              type: number
 *          - in: query
 *            name: category
 *            schema:
 *              type: number
 *          - in: query
 *            name: rating
 *            schema:
 *              type: number
 *          - in: query
 *            name: price_max
 *            schema:
 *              type: number
 *          - in: query
 *            name: price_min
 *            schema:
 *              type: number
 *          - in: query
 *            name: order
 *            schema:
 *              type: number
 *          - in: query
 *            name: sortBy
 *            schema:
 *              type: number
 *      responses:
 *          200:
 */
