"use strict";
/** Cập nhật sản phẩm
 * @swagger
 * /product/{id}:
 *  put:
 *      summary: Cập nhật sản phẩm
 *      tags: [Product]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Product ID
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                type: object
 *                required:
 *                  - name
 *                  - image
 *                  - category
 *                properties:
 *                   name:
 *                     type: string
 *                     example: Apple MacBook Air (2020) M1 Chip, 13.3-inch, 8GB, 256GB SSD
 *                   image:
 *                     type: string
 *                     example: https://cf.shopee.vn/file/575e04c0e1d08b5f1b9f624a8d6b1419
 *                   category:
 *                     type: string
 *                     example: 62f7473e4622fe20eba51652
 *                   description:
 *                     type: string
 *                     example: <div>\n<h3>Apple MacBook Air (2020) M1 Chip, 13.3-inch, 8GB, 256GB SSD</h3>\n    <p>Mạnh mẽ vươn tới thành công. Mà nhẹ bỗng.</p>\n    <p>Với chip M1.</p>\n    <p>Sức mạnh cho học tập.</p>\n    <p>Vô cùng gọn nhẹ. Vô cùng mạnh mẽ cho việc học.</p>\n    <h3>Nội dung quảng cáo</h3>\n    <p>Đây là máy tính xách tay mỏng và nhẹ nhất, siêu mạnh mẽ với chip M1. Tạo ra một bước đột phá về hiệu năng CPU và đồ họa, cùng với thời lượng pin lên đến 18 giờ.(<span>1)</span>&nbsp;Giúp bạn hoàn thành mọi khối lượng bài tập thật dễ dàng.</p>\n    <p><strong>Tính năng nổi bật</strong></p>\n    <ul>\n    <li>Chip Laptop M1 mang đến một bước đột phá về hiệu năng máy học, CPU và GPU</li>\n    <li>CPU 8 lõi cho hiệu năng nhanh hơn đến 3.5x, xử lý công việc nhanh chóng hơn bao giờ hết(2)</li>\n    <li>GPU lên đến 8 lõi cho hiệu năng nhanh hơn đến 5x cho các ứng dụng đòi hỏi cao về đồ hoạ(2)</li>\n    <li>Neural Engine 16 lõi cho công nghệ máy học hiện đại</li>\n    <li>Tăng thời gian sử dụng với thời lượng pin lên đến 18 giờ(1)</li>\n    <li>Bộ nhớ thống nhất 8GB hoặc 16GB giúp bạn làm việc gì cũng nhanh chóng và trôi chảy</li>\n    <li>Màn hình Retina 13.3 inch với dải màu rộng P3 cho hình ảnh sống động và chi tiết ấn tượng(3)</li>\n    <li>macOS Monterey cho phép bạn kết nối, chia sẻ và sáng tạo hơn bao giờ hết, sử dụng các Phím Tắt để làm bài nhanh hơn và chọn chế độ Tập Trung để tránh bị sao nhãng</li>\n    <li>Ổ lưu trữ SSD siêu nhanh giúp mở các ứng dụng và tập tin chỉ trong tích tắc</li>\n    <li>Thiết kế không quạt giảm tối đa tiếng ồn khi sử dụng</li>\n    <li>Camera FaceTime HD với bộ xử lý tín hiệu hình ảnh tiên tiến cho các cuộc gọi video đẹp hình, rõ tiếng hơn</li>\n    <li>Bộ ba micro phối hợp tập trung thu giọng nói của bạn, không thu tạp âm môi trường</li>\n    <li>Kết nối không dây nhanh với Wi-Fi 6</li>\n    <li>Hai cổng Thunderbolt / USB 4 để sạc và kết nối phụ kiện</li>\n    <li>Bàn phím Magic Keyboard có đèn nền và Touch ID giúp mở khóa an toàn hơn</li>\n    <li>Hiện có màu gold, xám bạc và bạc</li>\n    </ul>\n    <h3>Cấu hình</h3>\n    <p>8GB / 256GB - MGN63SA/A - Laptop 8-Core CPU/7-Core GPU/8GB RAM/256GB SSD/13.3-inch/Xám<br>8GB / 256GB - MGN93SA/A - Laptop 8-Core CPU/7-Core GPU/8GB RAM/256GB SSD/13.3-inch/Bạc<br>8GB / 256GB - MGND3SA/A - Laptop 8-Core CPU/7-Core GPU/8GB RAM/256GB SSD/13.3-inch/Vàng<br>8GB / 512GB - MGN73SA/A - Laptop 8-Core CPU/8-Core GPU/8GB RAM/512GB SSD/13.3-inch/Xám<br>8GB / 512GB - MGNA3SA/A - Laptop 8-Core CPU/8-Core GPU/8GB RAM/512GB SSD/13.3-inch/Bạc<br>8GB / 512GB - MGNE3SA/A - Laptop 8-Core CPU/8-Core GPU/8GB RAM/512GB SSD/13.3-inch/Vàng<br>16GB / 256GB - Z124000DE - Laptop 8C CPU/7C GPU/16GB RAM/256GB SSD/13.3-inch/Xám<br>16GB / 256GB - Z127000DE - Laptop 8C CPU/7C GPU/16GB RAM/256GB SSD/13.3-inch/Bạc<br>16GB / 256GB - Z12A0004Z - Laptop 8C CPU/7C GPU/16GB RAM/256GB SSD/13.3-inch/Vàng<br>16GB / 512GB - Z1250004D - Laptop 8C CPU/8C GPU/16GB RAM/512GB SSD/13.3-inch/Xám<br>16GB / 512GB - Z128000BR - Laptop 8C CPU/8C GPU/16GB RAM/512GB SSD/13.3-inch/Bạc<br>16GB / 512GB - Z12B000BR - Laptop 8C CPU/8C GPU/16GB RAM/512GB SSD/13.3-inch/Vàng</p></div>
 *                   oldPrice:
 *                     type: number
 *                     example: 28900000
 *                   price:
 *                     type: number
 *                     example: 22600000
 *                   stock:
 *                     type: number
 *                     example: 320
 *                   images:
 *                     type: array
 *                     items:
 *                        type: string
 *                     example: ["https://cf.shopee.vn/file/575e04c0e1d08b5f1b9f624a8d6b1419","https://cf.shopee.vn/file/9e51bfb9d5fd5e4f975b5121d69473b0","https://cf.shopee.vn/file/8bede43e38bd49328c7ecd2ff40c8ea5","https://cf.shopee.vn/file/dd3010efc9b6f9ad0be6f3ab1dcfb7c8"]
 *      responses:
 *          200:
 *              description: Success
 */
