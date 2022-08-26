/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - name
 *        - image
 *        - category
 *      properties:
 *        name:
 *          type: string
 *          description: Tên sản phẩm
 *        image:
 *          type: string
 *          description: Link ảnh sản phẩm
 *        images:
 *          type: array
 *          items:
 *             type: string
 *             description: Danh sách ảnh sản phẩm
 *        description:
 *          type: string
 *          description: Mô tả sản phẩm
 *        category:
 *          type: string
 *          description: Id danh mục
 *        oldPrice:
 *          type: number
 *          description: Giá gốc của sản phẩm
 *        price:
 *          type: number
 *          description: Giá đã giảm của sản phẩm
 *        rating:
 *          type: number
 *          description: Điểm đánh giá của sản phẩm
 *        stock:
 *          type: number
 *          description: Số lượng sản phẩm có trong kho
 *        sold:
 *          type: number
 *          description: Số lượng sản phẩm  đã bán
 *        view:
 *          type: number
 *          description: Số lượng lượt xem
 *        reviews:
 *          type: array
 *          items:
 *             type: string
 *             description: Danh sách nhận xét về sản phẩm
 */
