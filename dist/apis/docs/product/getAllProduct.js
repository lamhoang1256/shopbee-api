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
 *            description: tên sản phẩm
 *          - in: query
 *            name: page
 *            schema:
 *              type: number
 *            description: số trang
 *          - in: query
 *            name: limit
 *            schema:
 *              type: number
 *            description: số sản phẩm tối đa trong 1 page
 *          - in: query
 *            name: category
 *            schema:
 *              type: number
 *            description: danh mục
 *          - in: query
 *            name: rating
 *            schema:
 *              type: number
 *            description: điểm đánh giá
 *          - in: query
 *            name: price_max
 *            schema:
 *              type: number
 *            description: giá cao nhất
 *          - in: query
 *            name: price_min
 *            schema:
 *              type: number
 *            description: giá thấp nhất
 *          - in: query
 *            name: order
 *            schema:
 *              type: number
 *            description: sắp xếp theo
 *          - in: query
 *            name: sortBy
 *            schema:
 *              type: number
 *            description: tìm kiếm theo
 *      responses:
 *          200:
 *              description: Success
 */
