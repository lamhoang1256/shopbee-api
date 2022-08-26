/**
 * @swagger
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      required:
 *        - quantity
 *      properties:
 *        user:
 *          $ref: '#/components/schemas/User'
 *        orderItems:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              product:
 *                $ref: '#/components/schemas/Product'
 *              quantity:
 *                type: number
 *        shippingFrom:
 *          type: string
 *          description: Địa chỉ người gửi
 *        shippingTo:
 *          type: string
 *          description: Địa chỉ người nhận
 *        price:
 *          type: number
 *          description: Tổng tiền sản phẩm
 *        shippingFee:
 *          type: number
 *          description: Phí vận chuyển
 *        promotion:
 *          type: number
 *          description: Số tiền được giảm
 *        total:
 *          type: number
 *          description: Tổng thanh toán
 *        note:
 *          type: string
 *          description: Lưu ý cho người bán
 *        reasonCancel:
 *          type: string
 *          description: Lý do hủy đơn hàng
 *        status:
 *          type: string
 *          enum: ["waiting", "processing", "shipping", "delivered", "canceled"]
 *          description: Trạng thái đơn hàng
 *        statusCode:
 *          type: number
 *          enum: [0, 1, 2, 3, 4]
 *          description: Trạng thái đơn hàng theo số
 *        processingAt:
 *          type: string
 *          description: Thời điểm đơn hàng này đang xử lí
 *        shippingAt:
 *          type: string
 *          description: Thời điểm đơn hàng này đang vận chuyển
 *        deliveredAt:
 *          type: string
 *          description: Thời điểm đơn hàng này đã giao hàng
 *        canceledAt:
 *          type: string
 *          description: Thời điểm đơn hàng này đã hủy
 */
