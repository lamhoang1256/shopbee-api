const phones = [
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện Thoại Xiaomi Redmi 10 4GB/128GB - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/26/ac/82/3e293a6e2a9b05e704bb05599c7ce66c.jpg",
    oldPrice: 4942698,
    price: 3629000,
    rating: 2.6,
    stock: 30,
    sold: 79,
    view: 121744436,
    description:
      "Camera\n- 50MP camera chính\n- Sử dụng camera chính 50MP để ngắm nhìn thế giới với họa tiết đầy đủ và khám phá tiềm năng sáng tạo của bạn\n- Camera góc siêu rộng 8 MP sẽ mở rộng góc nhìn giúp bạn thu...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện Thoại Samsung A52S 5G 8GB/128GB - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/dc/b9/e2/e704c22dfd3ec8cd833490e288cdbe2b.jpg",
    oldPrice: 9562647,
    price: 7949000,
    rating: 4.6,
    stock: 5,
    sold: 28,
    view: 127061397,
    description:
      'Màn Hình Đỉnh Cao Cho Chuyển Động Mượt Mà\n- Mãn nhãn với những hình ảnh chi tiết, rực rỡ trên màn hình Super AMOLED 6.5" chuẩn FHD+ Super Smooth mang đến trải nghiệm mượt mà tối ưu, bất kể bạn chơi...',
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện thoại Samsung Galaxy A32 (6GB/128GB) - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/ae/4b/41/19f634958af9ea7da7e114b892fb3662.jpg",
    oldPrice: 6642900,
    price: 5490000,
    rating: 5,
    stock: 3,
    sold: 50,
    view: 121237681,
    description:
      "Thiết kế mới lạ, sang trọng nhưng không kém phần hấp dẫn\nSamsung Galaxy A32 có ngôn ngữ thiết kế cao cấp, sang trọng mặt lưng nổi bật cụm 4 camera cực chất không quá hào nhoáng nhưng vẫn đủ để giúp...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện thoại Samsung Galaxy A22 (6GB/128GB) - Hàng chính hãng- Đã kích hoạt bảo hành điện tử",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/0c/d0/41/776d398f1e41c4fdf3cb6445a6bcff65.jpg",
    oldPrice: 6559890,
    price: 4490000,
    rating: 2.6,
    stock: 30,
    sold: 78,
    view: 124877316,
    description:
      "\nThiết kê trẻ trung, cứng cáp\nKhông màu mè, không phức tạp,  được thiết kế theo phong cách tối giản nhưng vẫn rất bắt mắt và đem đến sự thoải mái cho người dùng khi cầm trên tay. Các góc cạnh được bo...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện thoại Xiaomi Redmi 9C (4GB/128GB) - Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e6/bd/79/a57bc69aa46460bfa4a704b4b8cfb080.jpg",
    oldPrice: 4525850,
    price: 3350000,
    rating: 4.6,
    stock: 1,
    sold: 40,
    view: 125755154,
    description:
      "Redmi 9C (4GB/128GB) được trang bị màn hình lớn, viên pin trâu, 3 camera AI cùng một hiệu năng đầy ổn định sẽ là lựa chọn tốt cho khách hàng đang muốn tìm một chiếc smartphone giá rẻ&nbsp;đầy đủ tính...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện Thoại Vsmart Bee Lite 2GB/16GB - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/3d/fa/0d/a1d998ecb3d2b880f2ed045ef719e088.jpg",
    oldPrice: 1922700,
    price: 1479000,
    rating: 4.2,
    stock: 5,
    sold: 50,
    view: 140184100,
    description:
      "Điện Thoại Vsmart Bee Lite 2GB/16GB - Hàng Chính Hãng\nBộ sản phẩm bao gồm: Thân máy, sạc, cáp USB, sách hướng dẫn sử dụng.       \nThiết kế cơ bản, kiểu dáng tinh gọn, dễ dùng\n- Mặt lưng chất liệu...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện thoại Samsung Galaxy A03 Core (2GB/32GB) - Hàng chính hãng - ĐÃ KÍCH HOẠT BẢO HÀNH ĐIỆN TỬ",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/c6/66/f6/0b1ad0c903277e49ca31d8630c68770f.jpg",
    oldPrice: 2653100,
    price: 2150000,
    rating: 5,
    stock: 2,
    sold: 58,
    view: 166389510,
    description:
      "GalaxyA03 Core có kết cấu đường cong mượt mà với thân máy để nâng cao khả năng cầm nắm. Màn hình rộng cho phép thưởng thức video một cách trọn vẹn nhất. Các họa tiết kẻ sọc thêm phần phong cách và...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện Thoại Oppo Reno 6Z 5G (8GB/128G) - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/0d/f4/c6/ca9484b98ecce0a5c65273e4203a010c.jpg",
    oldPrice: 7490000,
    price: 6190000,
    rating: 5,
    stock: 8,
    sold: 58,
    view: 166389510,
    description:
      "Điện thoại Reno6 Z 5G sở hữu thiết kế vô cùng thời thượng. Các đường nét, chi tiết trên máy được trau chuốt hoàn hảo và cực kỳ hấp dẫn. Các khung viền bo cong uyển chuyển, mềm mại mang đến cho người dùng cảm giác êm tay khi cầm nắm. Ngoài ra, kích thước tổng thể của máy rất nhỏ gọn và thuận tiện để người dùng mang theo bên mình mọi nơi...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Apple iPad Air (5th Gen) Wi-Fi, 2022",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/ef/7d/46/97a932f18dd846d6e4ace389aec2093f.jpg",
    oldPrice: 17800000,
    price: 15310000,
    rating: 3.9,
    stock: 21,
    sold: 39,
    view: 13389510,
    description:
      "iPad Air 5 M1 hoàn toàn mới. Linh hoạt hơn bao giờ hết. Màn hình Liquid Retina 10.9 inch tuyệt đẹp với dải màu rộng cho bạn trải nghiệm thị giác vô cùng sống động và chi tiết khi xem ảnh hay video cũng như khi chơi game trên thiết bị...",
  },
  {
    category: "62f741b7a2ae57a2d58fafeb",
    name: "Điện thoại Xiaomi POCO X4 Pro 5G 6GB/128GB 8GB/256GB | Snapdragon 695 5G",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/08/0d/8e/b00e5829a6a545eedd400002a1cceaf3.png",
    oldPrice: 7810000,
    price: 5890000,
    rating: 2.4,
    stock: 10,
    sold: 56,
    view: 510,
    description:
      "POCO X4 Pro 5G được trang bị màn hình FHD+ AMOLED 6.67 inch tần số quét 120 Hz. Tốc độ phản hồi cảm ứng ấn tượng hỗ trợ chơi game tốt hơn. Phần cứng bên trong mạnh mẽ với chip Snapdragon 695 5G kết hợp với RAM LPDDR4x 6GB/8GB và bộ nhớ trong UFS 2.1 128GB/256GB....",
  },
];
const lifeHouse = [
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Bộ cây lau nhà tự vắt thông minh, chổi lau nhà 360 độ, lau sạch khô nhanh - Parroti Pro PR01",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/ac/66/78/301f243ee1daf059d10c15df834f6146.jpg",
    oldPrice: 551823,
    price: 439000,
    rating: 2.6,
    stock: 100,
    sold: 11405,
    view: 53789449,
    description:
      "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n \n \nBẠN MUỐN MUA THÊM SẢN PHẨM KHÁC CỦA PARROTI\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\nBộ lau nhà ProMax - Size Lớn\nThùng rác Parroti Bin\nCọ bồn cầu Parroti Silicon\n\n\n\n \nBộ cây lau nhà thông minh tự vắt...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Vợt Muỗi Sunhouse SHE-E200 - Vàng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/b7/5f/bd/ab587a8a92c3814cb73a913f004745a6.jpg",
    oldPrice: 88015,
    price: 72800,
    rating: 4.7,
    stock: 3,
    sold: 217,
    view: 57655223,
    description:
      "\nVợt Muỗi Sunhouse SHE-E250 có kiểu dáng gọn nhẹ với thiết kế lưới điện an toàn, được làm bằng 2 lớp lưới nhôm (bên ngoài) và 1 lớp lưới sắt (bên trong), giúp tiêu diệt muỗi nhanh chóng.\nSản phẩm có...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Dụng cụ băm rau củ quả Lock&Lock Quick Chopper",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/cf/3f/99/bc6124dfcd1320d5cce3fe1cca5f8ec7.jpg",
    oldPrice: 106344,
    price: 84000,
    rating: 2.6,
    stock: 10,
    sold: 11848,
    view: 58804365,
    description:
      "\nLực băm nghiền mạnh nhờ hoạt động bằng phương pháp xoay và ba lưỡi dao bằng thép không gỉ.\nNếu bạn kéo thanh kéo nhiều lần, ba lưỡi dao sẽ quay nhanh và băm đều rau củ.\nLưỡi dao bằng thép không gỉ...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "giấy ăn gấu trúc Ycool khăn giấy tre 1 thùng 30 gói 300 tờ siêu dai mềm mại",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/25/8c/35/d9081d7f2905df3cf4d1700f180b85a3.jpg",
    oldPrice: 152375,
    price: 125000,
    rating: 4.6,
    stock: 30,
    sold: 11226,
    view: 70656792,
    description: "Loại sản phẩm: Giấy ănChất liệu: Bột treThành phần: 100% bột sợi tre nguyên chất",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Cây chà sàn thông minh cao cấp, chổi chà sàn đa năng 2 trong 1, cọ sàn và gạt nước – Parroti Easy ES02",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/88/ac/01/e1c4c865d7dad03b392e7e16e304c068.jpg",
    oldPrice: 206541,
    price: 159000,
    rating: 2.6,
    stock: 3,
    sold: 2950,
    view: 122692851,
    description:
      "\nChổi cọ sàn vệ sinh Parroti Easy ES02 được thiết kế tinh tế, cây chổi làm bằng nhôm cao cấp, có thể điều chỉnh độ dài linh hoạt phù hợp không gian phòng tắm. Cộng với tính năng vừa chà vừa gạt nước...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Bình Giữ Nhiệt Bằng Thép Không Gỉ Lock&Lock Vacuum Bottle LHC6180SLV (800ML)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/79/eb/3b/7928b781c8e3a78710291d38ffbb8b9c.jpg",
    oldPrice: 478725,
    price: 325000,
    rating: 4.7,
    stock: 10,
    sold: 33464,
    view: 73124604,
    description:
      "Bình Giữ Nhiệt Thép Không Gỉ Vacuum Bottle Lock&amp;Lock LHC6180FU (800ml) thiết kế xách tay dễ dàng cho việc mang theo. Màu sắc nổi bật mang đển cảm giác trẻ trung khi sử dụng.\nBình giữ nhiệt mang...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Hộp cơm thủy tinh kèm muỗng đũa LocknLock LLG991CL 930ml",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/4d/5d/ee/bbe447ab4330f401117ba9ee7112291a.jpg",
    oldPrice: 251256,
    price: 174000,
    rating: 2.6,
    stock: 10,
    sold: 4660,
    view: 73125532,
    description:
      "Hộp cơm thủy tinh kèm muỗng đũa LocknLock LLG991CL 930ml thiết kế vách ngăn giúp thực phẩm không bị trộn lẫn khi bỏ vào chung một hộp.\nBorosilicate là thủy tinh chịu nhiệt (lên tới 120 độ C), an toàn...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Cây lau kính, gạt chùi kính đa năng 2 đầu trong 1 - Parroti Shiny SN01",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/b8/0e/07/9f2f1407535a9b1855280d91caaf7f08.jpg",
    oldPrice: 167055,
    price: 129000,
    rating: 4.7,
    stock: 10,
    sold: 2046,
    view: 122700652,
    description:
      "\nCây lau kính, gạt chùi kính đa năng 2 đầu trong 1 - Parroti Shiny SN01 được thiết kế tinh tế, cán làm bằng nhôm cao cấp, có thể điều chỉnh độ dài linh hoạt phù hợp độ cao của cửa sổ. Cộng với tính...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Chảo chiên chống dính Tefal Light & Clean 26cm, dùng cho bếp ga và hồng ngoại- Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/01/6b/7a/31ca0a8b395c48111926acf7fc73da65.jpg",
    oldPrice: 322260,
    price: 205000,
    rating: 4.5,
    stock: 3,
    sold: 3480,
    view: 80617684,
    description:
      " \nChảo chiên Tefal Light &amp; Clean 26cm\nDÙNG CHO BẾP GAS/ BẾP HỒNG NGOẠI\nKHÔNG TƯƠNG THÍCH VỚI BẾP ĐIỆN TỪ\n\n \n\nClick gia nhập TEFAL CLUB ngay để được cập nhật nhiều thông tin hấp dẫn như cách đăng...",
  },
  {
    category: "62f741b7a2ae57a2d58faff1",
    name: "Bình giữ nhiệt Lock&Lock Belt Bottle LHC4267 490ml",
    image:
      "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/ae/4a/50/ff62a7ce46d82ebe25bd44382112d294.jpg",
    oldPrice: 346731,
    price: 237000,
    rating: 5,
    stock: 10,
    sold: 4055,
    view: 99621374,
    description:
      "\n\n\nBình giữ nhiệt Lock&amp;Lock Belt Bottle LHC4267 490ml với quai xách kiểu dáng dây đai giúp dễ dàng mang đi.\nTay cầm TPE ngăn nắp rơi ra và mất, dây đai cố định nắp trong khi uống.\nNắp được giữ cố...",
  },
];
const boyFashion = [
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo sơ mi nam giấu cúc, Áo sơ mi nam trơn dài tay Hàn Quốc chất lụa Nhật chống nhăn chống phai cao cấp",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/58/b1/cc/f4fcec3bdd3243547784c5d7a0e43830.jpg",
    oldPrice: 227520,
    price: 180000,
    rating: 0,
    stock: 30,
    sold: 5,
    view: 188940408,
    description:
      "\n  Áo sơ mi nam giấu cúc, Áo sơ mi nam trơn dài tay Hàn Quốc chất lụa Nhật chống nhăn chống phai cao cấp\n   Thông tin sản phẩm áo sơ mi nam giấu cúc của Amani Store:\n   - Áo sơ mi nam trơn dài tay...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo khoác jean nam Hahaman thời trang cao cấp AKJ06",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/30/95/44/118220d6e6e1ffd5e2e8210c402e86ec.jpg",
    oldPrice: 248261,
    price: 169000,
    rating: 4.5,
    stock: 3,
    sold: 137,
    view: 85347056,
    description:
      "Chất liệu vải Kaki jean mềm mại, không phai màu, không nhàu.Màu vải được Wash kỹ hạn chế ra màu khi giặt.Form áo vừa vặn, đường may tinh tế, chuẩn từng chi tiết.Thiết kế nổi bật, phong cáchCó thể...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo polo nam YODY Chất liệu Pique mắt chim bền màu, co giãn tốt, đàn hồi - APM3299",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/16/76/a5/82bfa01b8eb17cf2bc74730bcd99e741.png",
    oldPrice: 435045,
    price: 299000,
    rating: 4.7,
    stock: 100,
    sold: 221,
    view: 116150239,
    description:
      "Áo Phông Polo Nam YODY Phối Bo Trẻ Trung Chất Liệu Pique Mắt Chim Thoáng Mát - APM3299\nThời trang chính hãng YODY:\n- Mang sản phẩm Chính hãng, chất liệu tốt nhất tới Khách hàng.\n- Quý khách được xem...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo thun nam tay ngắn AKUBA form freesize chất liệu cotton không co rút AB2032",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/56/7b/82/3073f41d395f40b762b22796779598b0.jpg",
    oldPrice: 132096,
    price: 86000,
    rating: 2.6,
    stock: 5,
    sold: 366,
    view: 114927922,
    description:
      "CHI TIẾT SẢN PHẨM -- Sản phẩm: Áo thun nam tay ngắn AKUBA form freesize chất liệu cotton không co rút AB2032 - Màu sắc: Trắng, Đen, Đỏ, Vàng Nghệ, Bò Cháy, Xanh Bích, Cam Ngói, Dầu Mới - Chất vải:...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Combo 4 Quần Lót Nam cao cấp | quần xì nam | quần sịp nam | lưng nhật | vải thun lạnh 4 chiều | hiệu CM | kiểu brief | tam giác truyền thống | đồ lót nam",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/bd/8c/61/2af3d562a2d9431e08f73029399c7881.jpg",
    oldPrice: 104991,
    price: 79000,
    rating: 4.7,
    stock: 1000,
    sold: 368,
    view: 73748483,
    description:
      "Combo 4 Quần Lót Nam cao cấp lưng Nhật, quần xì nam, quần sịp nam, vải\nthun lạnh 4 chiều, tam giác truyền thống, đồ lót nam\n( 1 Combo = 04 quần lưng nhật )\n\n\n&lt;&gt; THIẾT KẾ - SỐ ĐO &lt;&gt;\n\nThiết...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo phông unisex nam nữ tay lỡ thun form rộng teen cổ tròn oversize cotton giá rẻ basic đen trắng tee pull TOM",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/6c/97/bd/4ff645f4eb53eb0187d3f886c50ebfd7.jpg",
    oldPrice: 64755,
    price: 45000,
    rating: 4,
    stock: 30,
    sold: 8,
    view: 188837678,
    description:
      "\n \n \n  \n   * Kính chào quý khách! Cảm ơn quý khách đã click vào trang sản phẩm của SamMy96 Shop. Sau đây là một số thông tin cực kì quan trọng của áo phông tay lỡ nam nữ cổ tròn vải Cotton co giãn:\n ...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Quần đùi nam vải gió siêu nhẹ thể thao co giãn tốt loại quần đùi mặc nhà thể thao đi chơi điều được QDG",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/94/3d/2a/c56e34f6e0fe614485a4ac73b3ead0f8.png",
    oldPrice: 82555,
    price: 55000,
    rating: 4.6,
    stock: 20,
    sold: 306,
    view: 109505658,
    description:
      "Quần đùi nam vải gió siêu nhẹ thể thao co giãn tốt loại quần đùi mặc nhà thể thao đi chơi điều được QDG\nCAM KẾT :\n-  Sẵn sàng nhận lại hàng nếu Quý khách không hài lòng và hoàn lại tiền 100%\n-  Cam...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Áo phông nam, áo thun nam có cổ tay ngắn vải thun cotton 100% mặc thoáng mát - ATN04",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/59/29/9b/33be0c4885a2992f0b50bb7b019daf6d.jpg",
    oldPrice: 111718,
    price: 83000,
    rating: 0,
    stock: 30,
    sold: 3,
    view: 190548072,
    description:
      "▷ Chúc mừng bạn đã lựa chọn được sản phẩm tốt khi đến với Shop\n▷ Cam kết sản phẩm giống ảnh\n▷ Phục vụ chuyên nghiệp, Nhiệt tình, Chu...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Quần Boxer Nam sợi thun lạnh kháng khuẩn, Quần Lót Nam co giãn 4 chiều thấm hút mồ hôi cực tốt thương hiệu BAW (combo 3 màu ngẫu nhiên) NH79",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7c/9e/5c/ff757d6337a7d6beb8b27caa8bc07ea0.jpg",
    oldPrice: 218673,
    price: 189000,
    rating: 4.5,
    stock: 3,
    sold: 164,
    view: 121252848,
    description:
      "CHE TÊN SẢN PHẨM KHI GIAO HÀNG\nQuần Boxer Nam sợi thun lạnh kháng khuẩn, Quần Lót Nam co giãn 4 chiều thấm hút mồ hôi cực tốt thương hiệu BAW (combo 3 màu ngẫu nhiên) NH79\n(Được kiểm tra hàng trước...",
  },
  {
    category: "62f741b7a2ae57a2d58fafea",
    name: "Quần Kaki Baggy Unisex Nam Nữ, Baggy Unisex Kaki Nam Nữ cạp chun vải Kaki nhập Hàn mềm co giãn",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/58/84/c7/2acdfec04abdc36350ca174ffbe35e8e.jpg",
    oldPrice: 108342,
    price: 78000,
    rating: 5,
    stock: 30,
    sold: 7,
    view: 176599288,
    description:
      "\n \n \n  \n   ✪ Giới thiệu sản phẩm:\n   Quần có thể mặc vào bất cứ mùa nào, bất cứ ai cũng có thể mặc được, mang đến cho người mặc nhiều sự lựa chọn hơn, thoải mái hơn.\n   ✪ Chi tiết sản phẩm: Quần nam...",
  },
];
const shopOnline = [
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Lốc 4 Chai bia Kronenbourg 1664 Blanc 330ml",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/81/4d/5a/a9d1af10a3aa31234aa259d5a482eca1.png",
    oldPrice: 154750,
    price: 125000,
    rating: 4.6,
    stock: 3,
    sold: 206,
    view: 142471191,
    description:
      "Kronenbourg 1664 Blanc:Là dòng bia cao cấp được ủ từ lúa mì, 1664 Blanc mang sắc sánh vàng đặc trưng, cùng nhiều tầng hương vị tươi mát và sảng khoái - hiện thân hoàn hảo cho chuẩn mực hương vị Pháp....",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Cát Vệ Sinh Cho Mèo - Cát Nhật 8L ",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7a/d3/c7/a2b0d0b108a56ad078a118c21c6a4b3b.png",
    oldPrice: 64900,
    price: 50000,
    rating: 4.7,
    stock: 30,
    sold: 2047,
    view: 66712826,
    description:
      "Cát được làm từ 100% Bentonite tự nhiên và thêm dược liệu thiên nhiên các mùi thơm dễ chịu.Xóa tan đi mùi hôi khó chịu của chó mèo mang đến cho bạn một môi trường dịu mát với mùi thơm của hương...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Mì Goreng Rasa Iga Penyet Vị Sườn Indomie (80G X 40 Gói/Thùng)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/66/56/8f/e075d1e203df688f55abe0432f4c4cc2.jpg",
    oldPrice: 318630,
    price: 215000,
    rating: 2.6,
    stock: 30,
    sold: 304,
    view: 56274610,
    description:
      "\nMì Xào Indomie: với 4 SKU chính, 40 Gói/Thùng, HSD 8 tháng kể từ ngày sản xuất và đóng gói. - Mi Goreng Special (Đặc Biệt) 85g - Mi Goreng Rendang (Bò Cay) 91g - Mi Goreng Hot&amp;Spicy (Cay Nồng)...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Bún gạo lứt ăn kiêng GUfoods - Giảm cân, Thực dưỡng, Eat clean",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/b3/3d/84/b6aa9f7296f40c51bcca4261c0bcc76e.jpg",
    oldPrice: 66631,
    price: 44900,
    rating: 5,
    stock: 10,
    sold: 3109,
    view: 76045163,
    description:
      "ĐẶC ĐIỂM NỔI BẬT\n✓ Sợi bún dai ngon, màu sắc tự nhiên\n✓ Phù hợp ăn kiêng, thực dưỡng\n✓ Hỗ trợ chế độ ăn giảm cân\n✓ Nhiều giá trị dinh dưỡng và lợi ích sức khỏe từ gạo lứt\n✓ Nguyên liệu sạch, không...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Hộp Yến Thiên Hoàng Hương Lá Dứa (6 Lọ x 70 ml)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7e/4e/6f/62c14dbcad123e856b109071c6846b9f.jpg",
    oldPrice: 143016,
    price: 118000,
    rating: 2.6,
    stock: 5,
    sold: 527,
    view: 52281932,
    description:
      "Hộp Yến Thiên Hoàng Hương Lá Dứa (6 Lọ x 70 ml) là sản phẩm với thành phần yến sào bổ dưỡng, hương thơm dịu nhẹ sẽ là nước uống bổ dưỡng cho gia đình bạn. Sản phẩm giúp bồi bổ cơ thể và tăng cường...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Dầu Gạo Lứt Simply 1L",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/74/ea/12/0f11b777f1a0669d05671d64320f484b.jpg",
    oldPrice: 92539,
    price: 70000,
    rating: 5,
    stock: 72,
    sold: 4573,
    view: 53831591,
    description:
      "Dầu Gạo Lứt Simply được chiết xuất từ lớp màng cám, là nơi chứa nhiều dưỡng chất nhất của hạt gạo lứt.\nGạo lứt là gạo nguyên cám, được biết đến là thực phẩm có nhiều lợi ích cho sức khỏe, nhưng thói...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Thùng 24 Chai Nước Giải Khát Revive 500ml",
    image:
      "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/02/9b/ef/bab03cb717f0384f0a35418aceb9efa3.PNG",
    oldPrice: 261800,
    price: 220000,
    rating: 5,
    stock: 55,
    sold: 947,
    view: 2393001,
    description:
      "KHÔNG CHỈ MẤT NƯỚC, BẠN CÓ THỂ MẤT SỨC DO VẬN ĐỘNG, NẮNG NÓNGMỗi ngày là 1 cuộc chơi để bạn chinh phục. Đừng để cuộc vui gián đoạn vì mất nước, mất sức khi bạn đổ mồ hôi. REVIVE - Nước uống điện giải...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Túi 46 Gói Nescafé Đậm Vị Cà Phê (17g)",
    image:
      "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/2d/f6/52/62acbb8368a78b11f9251cfb874c280d.jpg",
    oldPrice: 179218,
    price: 113000,
    rating: 2.6,
    stock: 5,
    sold: 14409,
    view: 143294,
    description:
      "Túi 46 Gói Nescafé Đậm Vị Cà Phê (17g)\nTúi 46 Gói Nescafé Đậm Vị Cà Phê (17g) được   điều chế từ những cà phê Việt nguyên chất, qua sàng lọc và rang xay theo công nghệ hiện đại cho ra đời hương vị...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Thức ăn mèo Whiskas vị cá ngừ túi 1.2kg",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/a0/29/a7/240a4daff3a2cd90519a53cac2c2306f.jpg",
    oldPrice: 147890,
    price: 115000,
    rating: 2.6,
    stock: 5,
    sold: 781,
    view: 92710936,
    description:
      "Thức ăn mèo Whiskas vị cá ngừ túi 1.2kg _x000D__x000D__x000D_● Cung cấp đủ chất dinh dưỡng cần thiết, giúp mèo cưng phát triển khỏe mạnh_x000D_● Giàu Omega 3&amp;6, axit béo giúp lông mèo khỏe và...",
  },
  {
    category: "62f741b7a2ae57a2d58fafef",
    name: "Thùng Sữa đậu nành FamiGo đậu đỏ nếp cẩm (200ml x 40 Bịch)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7a/2c/91/3480285395902b1856dfebaf4034473e.jpg",
    oldPrice: 243095,
    price: 168000,
    rating: 4.7,
    stock: 5,
    sold: 3512,
    view: 12629735,
    description:
      "Thùng Sữa đậu nành FamiGo đậu đỏ nếp cẩm (200ml x 40 Bịch) được làm từ 100% đậu nành hạt chọn lọc, không biến đổi Gen (Non - GMO).Sữa đậu nành chứa nhiều protein, chất xơ, vitamin và chất khoáng có...",
  },
];
const shopOnlineBook = [
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg",
    oldPrice: 165481,
    price: 127000,
    rating: 2.6,
    stock: 781,
    sold: 15935,
    view: 109017987,
    description:
      "NẾU MỘT NGÀY ANH THẤY TÔI ĐIÊN, THỰC RA CHÍNH LÀ ANH ĐIÊN ĐẤY!\nHỡi những con người đang oằn mình trong cuộc sống, bạn biết gì về thế giới của mình? Là vô vàn thứ lý thuyết được các bậc vĩ nhân kiểm...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Tổng ôn ngữ pháp Tiếng Anh cô Trang Anh- Sách luyện thi THPT Quốc gia môn tiếng anh ",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/c0/31/00/5f280790f1dbce884ead4835484d7c92.jpg",
    oldPrice: 143038,
    price: 119000,
    rating: 2.6,
    stock: 5,
    sold: 6203,
    view: 106185390,
    description:
      "Tips Học Sách Tiếng Anh Cô Trang Anh: Tổng Ôn Ngữ Pháp Hiệu Quả:\nBước 1: Kích hoạt mã ID phía cuối cuốn sách.Bước 2: Xem bài giảng lý thuyết trực tuyến đính kèm trên hệ thống qua mã ID.Bước 3: Xem ví...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Cây Cam Ngọt Của Tôi",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
    oldPrice: 76675,
    price: 65200,
    rating: 5,
    stock: 30,
    sold: 1048,
    view: 74677933,
    description:
      "“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của Brazil.”\n- Booklist\n“Một cách nhìn cuộc sống gần như hoàn chỉnh...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Blue Period - Tập 1 - Tặng Kèm Bookmark Giấy 2 Mặt + Card Nhựa PVC",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/52/c4/71/82c933799752b0129724ad81da9744ef.jpg",
    oldPrice: 58523,
    price: 44640,
    rating: 5,
    stock: 1,
    sold: 3453,
    view: 187594270,
    description:
      "KHI ĐAM MÊ THỨC TỈNH\nYataro Yaguchi là một học sinh xuất sắc nhưng có lối sống buông thả, không mục đích. Một ngày nọ, tận mắt chiêm ngưỡng bức tranh của một chị lớp trên ở CLB Mỹ thuật, Yataro hoàn...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg",
    oldPrice: 139018,
    price: 94250,
    rating: 5,
    stock: 6,
    sold: 1548,
    view: 108957058,
    description:
      "TÂM LÝ HỌC TỘI PHẠM - PHÁC HỌA CHÂN DUNG KẺ PHẠM TỘI\nTội phạm, nhất là những vụ án mạng, luôn là một chủ đề thu hút sự quan tâm của công chúng, khơi gợi sự hiếu kỳ của bất cứ ai. Một khi đã bắt đầu...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Sói Đầu Đàn Và Cún Nhỏ - Tập 2",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/d7/5c/f2/4090f78badbe3eec3d4556cb3537948d.JPG",
    oldPrice: 136080,
    price: 112000,
    rating: 2.6,
    stock: 1,
    sold: 2023,
    view: 185071151,
    description:
      "Nếu tập 1 của bộ truyện tranh “Sói đầu đàn và cún nhỏ” là tổng hợp đầy đủ câu chuyện của đại ca Sói cùng bé Cún dưới lốt động vật, thì sang tập 2 này chúng mình sẽ được thỏa mãn trí tưởng tượng với...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "My Hero Academia - Học Viện Siêu Anh Hùng Tập 29: Bakugo Katsuki: Trỗi Dậy [Tặng Kèm Bookmark Pro Hero]",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/02/ab/95/38b3a85c70db97d909bb05c805a25018.jpg",
    oldPrice: 35463,
    price: 23073,
    rating: 2.6,
    stock: 30,
    sold: 1520,
    view: 186265456,
    description:
      "Vì tên khổng lồ kia mà xung quanh tan hoang hết cả! Hắn cứ luôn miệng nói “đến chỗ chủ nhân” - là Shigaraki sao…? Không được! Nếu hắn tiến vào thành phố thì người dân sẽ không chống đỡ nổi! Cả các...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Ajin - Boxset Số 1 (Tập 1 - 6) - Tặng Kèm Bookmark 3D",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/0c/f9/ca/8e52b74aada7d97b7a8c0d8c4fe3b8d5.jpg",
    oldPrice: 334800,
    price: 279000,
    rating: 4.5,
    stock: 30,
    sold: 1492,
    view: 174215338,
    description:
      "AJIN kể về một câu chuyện ly kỳ, hấp dẫn: 17 năm trước, lần đầu tiên một giống loài bất tử được phát hiện trên chiến trường ở châu Phi. Từ đó, người ta biết đến sự tồn tại của một chủng sinh vật bất...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Nhà Giả Kim (Tái Bản 2020)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
    oldPrice: 56500,
    price: 47400,
    rating: 5,
    stock: 6,
    sold: 2598,
    view: 56890005,
    description:
      "Sơ lược về tác phẩm\nTất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.\nTiểu...",
  },
  {
    category: "62f741b7a2ae57a2d58faff0",
    name: "Tâm Lý Học Về Tiền",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg",
    oldPrice: 124413,
    price: 113000,
    rating: 2.6,
    stock: 3,
    sold: 15816,
    view: 75953558,
    description:
      "Tiền bạc có ở khắp mọi nơi, nó ảnh hưởng đến tất cả chúng ta, và khiến phần lớn chúng ta bối rối. Mọi người nghĩ về nó theo những cách hơi khác nhau một chút. Nó mang lại những bài học có thể được áp...",
  },
];
const eletronicDevice = [
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Tai nghe nhét tai có dây jack 3.5mm Remax RM-512 (New Package) - Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/a5/9c/63/a5b10d91facf564be71d7961f42488bb.jpg",
    oldPrice: 212085,
    price: 135000,
    rating: 4.7,
    stock: 5,
    sold: 1771,
    view: 110850010,
    description:
      "Thay đổi thói quen nghe nhạc không an toàn bằng chiếc #tai_nghe có dây Remax #RM_512 không chỉ mang đến những âm thanh sống động nhất, mà hơn thế còn đảm bảo an toàn cho bạn.\n Thiết kế hiện đại, cao...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Giá Đỡ Laptop Hợp Kim Nhôm Cao Cấp Có Thể Gấp Gọn, Giúp Tản Nhiệt Laptop, Macbook, Máy Tính Xách Tay. 07 Vị Trí Điều Chỉnh Góc Độ. Hàng Chính Hãng Tamayoko FS060",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7f/dd/bf/d8c68330e0746afc2df65f4150e4165f.png",
    oldPrice: 269892,
    price: 189000,
    rating: 2.6,
    stock: 211,
    sold: 5422,
    view: 72796677,
    description:
      "\n\nBẠN CÓ BIẾT?\nL\nLàm việc với máy tính thời gian dài sai tư thế, cúi đầu trong thời gian dài có thể gây nguy hại cho cột sống của bạn và làm tăng tốc độ thoái hóa cột sống. Thói quen dùng máy tính...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Tai nghe bluetooth True Wireless thiết kế retro Remax TWS-38 - Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/73/fd/b2/97a724680ca014f44ad6458c446b831a.jpg",
    oldPrice: 1104871,
    price: 899000,
    rating: 4.5,
    stock: 5,
    sold: 258,
    view: 140376077,
    description:
      "Tai nghe bluetooth True Wireless thiết kế retro Remax TWS-38 - Hàng chính hãng\n\nTai nghe bluetooth true wireless Remax TWS-38 thiết kế retro độc đáo, chống ồn đỉnh cao.\nDung lượng pin 450mAh: thời...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Ốp lưng dành cho Samsung Galaxy S22 Ultra/ S22 Plus ESR  AIR SHIELD BOOST-Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/ef/31/ac/85c5e8915179590b6bd7e801c9a56ddd.jpg",
    oldPrice: 478584,
    price: 414000,
    rating: 2.6,
    stock: 3,
    sold: 17,
    view: 163838948,
    description:
      "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n \n\n\n\n\n\n\n \n\n\n \n\n\n\nStand Your Way\nThe built-in metal kickstand supports vertical and horizontal viewing giving you the freedom to kick back and stream your favorite shows or sit...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Tai nghe bluetooth nhét tai chống ồn cao cấp V5.0 chính hãng dùng cho iPhone Samsung OPPO VIVO HUAWEI XIAOMI tai nghe không dây - Hàng Chính Hãng PKCB",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg",
    oldPrice: 425147,
    price: 284000,
    rating: 4.5,
    stock: 10,
    sold: 1481,
    view: 109393114,
    description:
      "Tai nghe bluetooth nhét tai chống ồn cao cấp chính hãng PKCB\n\n\nPhạm vi truyền: 10 mét\n\n\nKênh: âm thanh nổi\n\n\nMàu: đen \n\n\nCảm ứng thông minh\n\n\nChip Bluetooth 5.0 mới mượt mà và không bị trễ\n\n\nGiảm...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Adapter Sạc 1 Cổng USB Type-C 20W - Trắng",
    image:
      "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/b9/b0/cf/c7e8e18f606f3db4bef450cfacb53532.jpg",
    oldPrice: 867900,
    price: 550000,
    rating: 5,
    stock: 5,
    sold: 7790,
    view: 71523845,
    description:
      "Bộ Sạc Apple USB-C 20W\nBộ Sạc Apple USB-C 20W giúp sạc nhanh và hiệu quả tại nhà, trong văn phòng hoặc khi đang di chuyển. Mặc dù bộ sạc này tương thích với mọi thiết bị có cổng USB‑C, Apple khuyên...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Pin Sạc Dự Phòng Xiaomi Redmi 20000mAh PB200LZM Tích Hợp Cổng USB Type - C In Hỗ Trợ Sạc Nhanh 18W - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/c3/87/c7/62b58a63be68550fa56b2b75eb7ffbe5.jpg",
    oldPrice: 586696,
    price: 452000,
    rating: 4.7,
    stock: 88,
    sold: 14115,
    view: 73627671,
    description: "\n\n\n\n",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Giá đỡ / Đế đỡ tản nhiệt dành cho laptop, macbook, máy tính bảng gấp gọn tiện dụng + tặng kèm túi đựng, ( Giao màu ngẫu nhiên )- Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e8/df/2e/0dafce4a3b47a969fd81a53ffe6b3a1b.jpg",
    oldPrice: 150381,
    price: 99000,
    rating: 0,
    stock: 30,
    sold: 4,
    view: 184802363,
    description:
      "Giá đỡ / Đế đỡ tản nhiệt dành cho laptop, macbook, máy tính bảng gấp gọn tiện dụng ( Giao màu ngẫu nhiên )- Hàng chính hãng\nTHÔNG TIN SẢN PHẨM\n- Màu sắc : Shop giao màu ngẫu nhiên ( Trắng bạc ,Hồng,...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Chuột không dây Logitech B175 - đầu thu USB 2.4Ghz, pin 1 năm, nhỏ gọn, thiết kế thuận cả 2 tay, phù hợp PC/ Laptop - Hàng chính hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/53/da/59/cee0de2912c797221dcbd6a4d0af99f8.png",
    oldPrice: 202398,
    price: 158000,
    rating: 4.7,
    stock: 100,
    sold: 6080,
    view: 23564916,
    description:
      "Thiết kế vừa vặn\r\nChuột không dây Logitech B175 sử dụng công nghệ kết nối không dây 2.4GHz, khoảng cách hoạt động trong vòng 10m, chuột được thiết kế vừa với tầm tay, đem đến cho người dùng sự thoải...",
  },
  {
    category: "62f741b7a2ae57a2d58fafec",
    name: "Bao Tay Chơi Game Cảm Ứng Chống Mồ Hôi SIDOTECH Siêu Mỏng Vải Sợi Carbon Siêu Bền Chống Giãn Xù, Cảm Ứng Nhạy Thuộc Dòng Găng Tay Chơi Game Bao Ngón Tay Cho PUBG Tốc Chiến Freefire Liên Quân mobile - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/0a/07/39/b9050cc9f02a8d01cd45466a9e21b9d4.jpg",
    oldPrice: 23800,
    price: 20500,
    rating: 4.6,
    stock: 5,
    sold: 391,
    view: 167046982,
    description:
      "\n\n\n\n\n\n\n \nTHÔNG TIN CHI TIẾT\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nChất liệu vải sợi carbon siêu bền đặc biệt\nChống co giãn, xù có thể giặt\nPhụ kiện không thể thiểu để Leo rank TOP 1\nKết hợp 4 ngón tay tăng gấp 2 lần...",
  },
];
const sport = [
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Biti's Hunter Street Vintage Green DSMH04000",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/66/ac/68/c0e000894c51271004f5cab2548bbe3c.jpg",
    oldPrice: 795681,
    price: 633000,
    rating: 2.6,
    stock: 1,
    sold: 279,
    view: 103860323,
    description:
      "Đa phong cách và tiện dụng - Bitis Hunter Street thế hệ mới hứa hẹn mang đến cho các tín đồ sneaker nhiều phong cách thời trang biến hóa khác nhau chỉ trên 1 đôi giày tiện dụng\n Độ nhẹ tối đa 300 gr/...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Cao Cấp Nam Biti's Hunter Layered Upper DSMH02800DEN (Đen)",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/c9/b5/db/ec0116477e330664dfdb0e8e76811320.jpg",
    oldPrice: 1096964,
    price: 932000,
    rating: 2.6,
    stock: 2,
    sold: 360,
    view: 97518297,
    description:
      "Cải tiến thiết kế độc đáo với xu hướng #layer từ những “đường cắt” chất liệu đan xen, lần đầu tiên có mặt tại gia đình Thợ Săn. Sở hữu công nghệ vượt trội chuẩn Hunter X, '   | -  sẵn sàng cùng bạn...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày thể thao nam Anta Super Flexi 812237788-1",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/47/4e/13/6a03a4476efb2c9be3d159f784f4930d.jpg",
    oldPrice: 1119226,
    price: 839000,
    rating: 5,
    stock: 2,
    sold: 16,
    view: 188585393,
    description:
      " Giày thể thao nam Anta Super Flexi 812237788-1  sở hữu thiết kế thời trang, năng động, cùng chất liệu bền bỉ hỗ trợ vận động tốt và bảo vệ đôi chân cho người mang. Đế cao su mềm, êm ái giúp bạn cảm...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Biti's Hunter Street Vintage Green DSMH04000XNG (Xanh Ngọc)",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/fc/41/e1/1dd6e73818e678cab625ffe57b8ea788.jpg",
    oldPrice: 887465,
    price: 633000,
    rating: 5,
    stock: 5,
    sold: 389,
    view: 96703134,
    description:
      "Đa phong cách và tiện dụng - Bitis Hunter Street thế hệ mới hứa hẹn mang đến cho các tín đồ sneaker nhiều phong cách thời trang biến hóa khác nhau chỉ trên 1 đôi giày tiện dụng\n Độ nhẹ tối đa 300 gr/...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Cao Cấp Nam Biti's Hunter Layered Upper DSMH02800DEN (Đen)",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/c9/b5/db/7b40dc2cd315946d72fbeff8b0ef77c4.jpg",
    oldPrice: 1044772,
    price: 932000,
    rating: 2.6,
    stock: 2,
    sold: 360,
    view: 97518301,
    description:
      "Cải tiến thiết kế độc đáo với xu hướng #layer từ những “đường cắt” chất liệu đan xen, lần đầu tiên có mặt tại gia đình Thợ Săn. Sở hữu công nghệ vượt trội chuẩn Hunter X, '   | -  sẵn sàng cùng bạn...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Biti's Hunter Street Vintage Blue DSMH04000XDL (Xanh Dương Lợt)",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/26/71/21/eef591d86300b9c98821dbd29661490d.jpg",
    oldPrice: 726051,
    price: 633000,
    rating: 2.6,
    stock: 5,
    sold: 395,
    view: 101539492,
    description:
      "Đa phong cách và tiện dụng - Bitis Hunter Street thế hệ mới hứa hẹn mang đến cho các tín đồ sneaker nhiều phong cách thời trang biến hóa khác nhau chỉ trên 1 đôi giày tiện dụng\n Độ nhẹ tối đa 300 gr/...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Bóng Rổ Cổ Cao Cury06- Giày Sneaker chơi bóng rổ",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/88/e1/50/51bd20d00b2449d301054fda1a90267e.jpg",
    oldPrice: 505318,
    price: 446000,
    rating: 5,
    stock: 30,
    sold: 23,
    view: 186753065,
    description:
      "****Lưu ý: Sản phẩm được bảo hành mọi lỗi sản xuất trong vòng 7 ngày đầu tiên, vì thế, sau khi nhận hàng, nếu có bất cứ vấn đề gì, quý khách hãy liên hệ ngay với chúng tôi qua thông tin trên đơn hàng...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Biti's Hunter X DSMH03500TRG - Trắng",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/67/5e/13/7774915c268aabf4caeaeeb4619e9274.jpg",
    oldPrice: 1287092,
    price: 932000,
    rating: 2.6,
    stock: 2,
    sold: 644,
    view: 90370326,
    description:
      "\nGiày Thể Thao Nam Biti's Hunter X DSMH03500với công nghệ đế LiteFlex 2.0 độc quyền từ Biti's Hunter ứng dụng công nghê sản xuất IP trên nền chất liệu Phylon không chỉ giúp đôi chân cảm giác \"Nhẹ nư...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Nữ Chạy Bộ, Tập Gym",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/36/9d/d1/9a8d2410a1e1042e27163fcd70b88671.jpg",
    oldPrice: 202937,
    price: 149000,
    rating: 4.5,
    stock: 30,
    sold: 185,
    view: 110151835,
    description:
      "Ô TẢ SẢN PHẨM\n\n\n\n\nSiêu nhẹ, êm chân, đế chống trơn trượtMàu sắc trẻ trung, dễ phối đồ, thích hợp mang cặp, nhóm, lớThích hợp mang đi chơi, đi dạo, tập gym, thể thao, chạy bộNam nữ đều mang được\n\nGiày...",
  },
  {
    category: "62f741b7a2ae57a2d58fafed",
    name: "Giày Thể Thao Nam Biti's Hunter Street x Vietmax 2020 - BST HaNoi Culture Patchwork DSMH025",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/19/d8/d6/ab596240cf005ae4c659461e40b05d48.jpg",
    oldPrice: 1437472,
    price: 928000,
    rating: 5,
    stock: 2,
    sold: 182,
    view: 90369872,
    description:
      "Mỗi đôi Hanoi Culture Patchwork hoàn thiện là tất cả những “chăm chút” từ bàn tay người thợ Việt. Bởi không một máy móc nào có thể chuyển tải trọn vẹn và tinh tế những thái cực văn hoá Hà Nội lên...",
  },
];
const laptop = [
  {
    category: "62f7473e4622fe20eba51652",
    name: "Màn hình máy tính LG UltraGear 32GN500-B - 31.5 inch - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/de/09/cd/a0d0ee2aba5382862a5d0aa7c2085916.png",
    oldPrice: 7990000,
    price: 5990000,
    rating: 4.4,
    stock: 502,
    sold: 259,
    view: 17842,
    description:
      "Màn hình FHD 31,5 inch (1920 X 1080). Tốc độ làm mới 165Hz & MBR 1ms sRGB 95% (Thông thường) & HDR10. Tương thích NVIDIA G-Sync. Công nghệ AMD FreeSync Premium. Thiết kế hầu như không có viền....",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "MacBook Air M1 13 inch 2020",
    image:
      "https://salt.tikicdn.com/cache/400x400/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg",
    oldPrice: 24900000,
    price: 22900000,
    rating: 2.6,
    stock: 102,
    sold: 229,
    view: 103842,
    description:
      "MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple, siêu mạnh mẽ với chip M1. Tạo ra một bước đột phá về hiệu năng CPU và đồ họa, cùng với thời lượng pin lên đến 18 giờ.(1) Giúp bạn hoàn thành mọi khối lượng bài tập thật dễ dàng....",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "MacBook Pro M2 13 inch 2022",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/2f/c7/5f/f6b798562b1c82b5812c352bc974a6b0.jpg",
    oldPrice: 35990000,
    price: 31740000,
    rating: 3.9,
    stock: 156,
    sold: 1033,
    view: 103842,
    description:
      "MacBook Pro 13 inch nay đa năng hơn bao giờ hết. Siêu mạnh mẽ với chip M2 thế hệ tiếp theo, đây là chiếc máy tính xách tay chuyên nghiệp nhỏ gọn nhất của Apple, cùng thời lượng pin lên đến 20 giờ.1",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "MacBook Air M2 2022",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/dd/16/ce/ded92ab7ef96c9c4853e6016e3125676.jpg",
    oldPrice: 35990000,
    price: 32990000,
    rating: 4.1,
    stock: 1356,
    sold: 1433,
    view: 1842,
    description:
      "Siêu mạnh mẽ với chip M2 thế hệ tiếp theo, MacBook Air được thiết kế mới, kết hợp giữa hiệu năng đáng kinh ngạc và thời lượng pin lên đến 18 giờ trong vỏ nhôm mỏng ấn tượng.",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "MacBook Pro 16 inch 2021",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/3a/e3/fb/991fc990fe8bc76d92d3d0cefd2230e1.jpg",
    oldPrice: 64990000,
    price: 59580000,
    rating: 4.6,
    stock: 1466,
    sold: 602,
    view: 183112,
    description:
      "MacBook Pro 16 inch mang đến hiệu năng cao ấn tượng để xử lý mọi khối lượng bài tập. Lựa chọn chip M1 Pro mạnh mẽ hay M1 Max còn mạnh hơn thế để xử lý nhanh gọn khối lượng bài tập khủng cùng thời lượng pin đáng kinh ngạc.(1) Với màn hình Liquid Retina XDR 16 inch sống động và nhiều cổng kết nối chuyên nghiệp, bạn có thể hoàn thành nhiều bài vở ở trường hơn bao giờ hết với MacBook Pro.",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "Màn Hình Máy Tính 27 inch UHD 4K (3840 x 2160) Tràn Viền X9",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/57/53/f6/b176ddae97a2cab7501319f191f4cb7b.jpg",
    oldPrice: 8950000,
    price: 6750000,
    rating: 4.4,
    stock: 2466,
    sold: 602,
    view: 109112,
    description:
      " Màn Hình Máy Tính 27 inch UHD 4K (3840 x 2160) Tràn Viền X9 - Kích thước màn Hình 27 inch , tỉ lệ 16:9 - Độ Phân giải UHD 4K 3840 x 2160- Tần số quét :60hz- Tốc độ đáp ứng chỉ 2ms",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "Màn Hình Cong Samsung LC27F397FHEXXV 27inch FullHD 4ms 60Hz FreeSync VA - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/98/9e/9a/9fd5856e9a6cdfe715d8318bd263e8ca.jpg",
    oldPrice: 5632000,
    price: 4360000,
    rating: 3.8,
    stock: 9066,
    sold: 132,
    view: 19812,
    description:
      "Màn Hình LED Samsung Siêu Mỏng LC27F397FHEXXV cho bạn trải nghiệm hình ảnh sống động với màn hình cong tối ưu của Samsung. Bao trùm mọi giác quan như một rạp phim iMax thực thụ, màn hình cong tạo ra góc nhìn tốt hơn, tăng cường độ sâu, cuốn bạn vào thế giới đa phương tiện sống động.",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "Màn hình máy tính Dell Ultrasharp U2422H 23.8 inch FHD USB TypeC - Hàng Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/33/75/d3/2c2d53de67157c7fcdc15dfe608ebf48.png",
    oldPrice: 6780000,
    price: 6750000,
    rating: 4.4,
    stock: 2466,
    sold: 602,
    view: 109112,
    description:
      " Màn Hình Máy Tính 27 inch UHD 4K (3840 x 2160) Tràn Viền X9 - Kích thước màn Hình 27 inch , tỉ lệ 16:9 - Độ Phân giải UHD 4K 3840 x 2160- Tần số quét :60hz- Tốc độ đáp ứng chỉ 2ms",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "Màn Hình Máy Tính 27 inch UHD 4K (3840 x 2160) Tràn Viền X9",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/46/86/07/3a93a4ba3b3f6094956a2bd486abfb93.png",
    oldPrice: 9880000,
    price: 6780000,
    rating: 4.1,
    stock: 6566,
    sold: 672,
    view: 199012,
    description:
      "LCD DELL UltraSharp U2422H cho hiệu suất màn hình ấn tượng: Trải nghiệm độ rõ nét vượt trội trên màn hình tuyệt vời với độ phân giải Full HD, kích thước hiển thị của tấm nền IPS",
  },
  {
    category: "62f7473e4622fe20eba51652",
    name: "Laptop Lenovo IP 1 11IGL05 81VT006FVN (Pentium N5030/ 4GB DDR4 2400MHz/ 256GB SSD/ 11.6 HD/ WIn 11)",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/2d/f0/9a/1311d77b03166c4ccd776d45ed732cfe.jpg",
    oldPrice: 6786000,
    price: 5540000,
    rating: 3.4,
    stock: 1966,
    sold: 5492,
    view: 249012,
    description:
      "Laptop Lenovo IP 1 11IGL05 81VT006FVN được trau chuốt khá tỉ mỉ và hoàn thiện chắc chắn. Vỏ ngoài của máy được hoàn thiện từ chất liệu nhựa polycarbanate và được xử lý dạng sần vừa mang lại vẻ tinh tế và hiện đại cho máy vừa chống bám bụi bẩn, mồ hôi và dấu vân tay khá hiệu quả. Ngoài ra, máy còn sở hữu trọng lượng khá nhẹ nhàng khi chỉ nặng 1.2 kg, nhờ đó mà các bạn sinh viên có thể dễ dàng mang máy lên trường để học nhóm hay thuyết trình.  ",
  },
];
const girlFashion = [
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo sơ mi cộc tay thiết kế kiểu phong cách nhẹ nhàng cổ tròn_087 chất đẹp mầu trắng đen deal tốt",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/c1/54/49/5dcebbd691611cd1e21f204b57021671.jpg.webp",
    oldPrice: 155000,
    price: 125000,
    rating: 3.8,
    stock: 196,
    sold: 54,
    view: 2012,
    description:
      "Áo sơ mi cộc tay thiết kế kiểu phong cách nhẹ nhàng cổ tròn_087. Màu:trắng. Size:Freesize ",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo thun nữ - áo phông cộc tay phom rộng in số 11 phong cách hàn quốc",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/ef/29/02/e5386339080cda3f5f4cc682fe5d14e0.jpg.webp",
    oldPrice: 89000,
    price: 66000,
    rating: 4.2,
    stock: 3196,
    sold: 533,
    view: 20332,
    description:
      "Áo bóng rổ chất cotton được xem như mẫu áo ưa thích của các bạn trẻ trong thời gian gần đây - Áo kiểu dáng thể thao cùng chất liệu cotton co dãn thấm hút mồ hôi tốt sẽ đem lại cảm giác mặc thoải mái khi mặc đặc biệt là trong ngày hè - Áo thun tay lỡ được xem như chiếc áo vạn năng cho các chị em khi có thể che đi các khuyết điểm trên cơ thể. Các cô nàng béo khi mặc trông sẽ thon gọn hơn hay những cô nàng gầy khi mặc lên trông sẽ đầy đặn hơn",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo Bra Thun Mềm Dáng Lửng Sẵn Đệm Ngực Siêu Hot 1809 ️ ️ hàng đẹp chất mềm , trendy",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e3/96/59/a0fd6d4fc154d0bc7c238a347754b440.jpg.webp",
    oldPrice: 78000,
    price: 50000,
    rating: 3.9,
    stock: 1136,
    sold: 313,
    view: 24332,
    description:
      "FEEDBACK 100% KHÁCH MUA HÀNG GỬI CHO SHOP CHẤT LƯỢNG ĐI CÙNG THƯƠNG HIỆU. CAM KẾT RẺ NHẤT THỊ TRƯỜNG GIÁ LẺ=GIÁ BUÔN",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo sơ mi nữ Giấu Nút tay dài phối voan mỏng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e1/6a/81/b67a73e70c700ab39b0f856804ad2d8b.jpg.webp",
    oldPrice: 349000,
    price: 212000,
    rating: 4.5,
    stock: 873,
    sold: 3931,
    view: 937174,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo sơ mi nữ GUMAc AC08055 lai lật đô sau xếp ly nhiều màu",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/a5/ec/6c/d345dd48d670b9548794e0bf2166d6fd.jpg.webp",
    oldPrice: 297000,
    price: 213000,
    rating: 2.6,
    stock: 2133,
    sold: 494,
    view: 301831,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo nữ kiểu GUMAC AC08071 phom suông xếp ly rã đô",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7e/4e/ae/881193139a0e866ced7a0567f6aa515e.jpg.webp",
    oldPrice: 396000,
    price: 286000,
    rating: 4,
    stock: 113,
    sold: 213,
    view: 10911,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo kiểu nữ GUMAC AC08110 phom suông tay dài xếp ly viền bèo",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/72/c2/92/c4f7ba08bbfddabafc4351c5e57c641f.jpg.webp",
    oldPrice: 405000,
    price: 356000,
    rating: 4.9,
    stock: 311,
    sold: 4414,
    view: 421030,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo polo nữ GUMAC ATC04011 phối cổ sọc viền nhiều màu, thanh lịch",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/c3/64/92/e2b5254d2dcad49d0b6db49466ff8e32.jpg.webp",
    oldPrice: 157000,
    price: 127000,
    rating: 4.1,
    stock: 2102,
    sold: 3133,
    view: 3213133,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo polo nữ GUMAC ATC04021 sọc ngang kiểu dáng trẻ trung năng động",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/f1/ae/4a/645c376f7a2b475e264e47da7d78f594.jpg.webp",
    oldPrice: 145000,
    price: 135000,
    rating: 2.6,
    stock: 1029,
    sold: 212,
    view: 21310,
    description:
      "#thoitrangnu #aothunnu #gumac #aophong #aothun #freesize #fashion #inhinh #hanquoc #formrong #unisex #taylo #fullbox #aothununisex #aothuntaylo #aothunmoi #aothuninchu #ao #thun #inchu #áo thun nữ #áo phông nữ #áo nữ #áothun #áothunnữ #áophôngnữ #genz #in chữ #áo in chữ #phom rộng #áo #thun nữ #áoinchữ #áo thun hàn quôc #áo thun mới #áo thun loang #gumac #happinessfashion #thoitrangnu #giamgia #khuyenmai",
  },
  {
    category: "62f741b7a2ae57a2d58faff4",
    name: "Áo sơ mi nữ GUMAC AC04056 tay dài phối xếp ly nhún dễ thương",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/2e/e3/22/730c2f74e2f28932a3b44f06af80894b.jpg.webp",
    oldPrice: 197000,
    price: 177000,
    rating: 4.6,
    stock: 1029,
    sold: 2121,
    view: 31314,
    description:
      "#gumac #gumacfashion #happinessfashion #thoitrangnu #giamgia #khuyenmai #aokieu #aosomi #aosominu #somi #fashion #aosomicongso #hanghieu #docongso #ao #aomoi #aosomigumac #sominamgiare #sominamhanquoc #somitayngan #somiunisex #áo #áo sơ mi #áo nữ #áo kiểu #sơ mi #sơ mi nữ giá rẻ #sơ mi giá rẻ #sơ mi công sở #áosơmi #áonữ #áokiểu #sơmi #sơminữgiárẻ #sơmigiárẻ #sơmicôngsở",
  },
];
const watch = [
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nữ Julius Hàn Quốc JA-979 Dây Da",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/e7/9d/01/0e0c222a50d601b582a5808fac25f817.jpg.webp",
    oldPrice: 412000,
    price: 290000,
    rating: 2.6,
    stock: 2121,
    sold: 3193,
    view: 98743,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nữ Julius Hàn Quốc JA-1190LD Dây Da Có Lịch",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/eb/2d/fa/ea5af214c2f8d657b38b31da84f41274.jpg.webp",
    oldPrice: 590000,
    price: 493000,
    rating: 1.4,
    stock: 2121,
    sold: 931,
    view: 3183746,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nữ Julius Hàn Quốc JA979 Mặt Tròn Cá TÍnh Dây Da Màu Nâu",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/55/b2/e3/e438ea32f21f24effe37b29835f6e955.jpg.webp",
    oldPrice: 518000,
    price: 418000,
    rating: 3.2,
    stock: 2192,
    sold: 319,
    view: 31391,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nữ Dây Kim Loại Julius JA-732 - Bạc",
    image: "https://salt.tikicdn.com/cache/400x400/media/catalog/product/_/m/_mg_3732.jpg.webp",
    oldPrice: 569000,
    price: 429000,
    rating: 2.6,
    stock: 2121,
    sold: 313,
    view: 13019,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nữ Dây Kim Loại Julius JA-728C (28mm) - Vàng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/d6/7b/7a/73461f3b129bf3045f3207119f0e77e2.jpg.webp",
    oldPrice: 554000,
    price: 434000,
    rating: 4.2,
    stock: 211,
    sold: 3131,
    view: 283913,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng hồ cơ nữ Hasher máy cơ tự động mặt kính full kim cương, dây đeo thép không gỉ sang chảnh full box cao cấp",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/13/34/1b/532014994c2760b29df60c55470ddd88.jpg.webp",
    oldPrice: 298000,
    price: 250000,
    rating: 2.4,
    stock: 121,
    sold: 313,
    view: 313592,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nam Casio F91W-1DG Chính Hãng",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/bb/08/92/dd9b7f83cad2cc4ad2cb8a0b7bb3cd18.jpg.webp",
    oldPrice: 332000,
    price: 310000,
    rating: 4.4,
    stock: 2109,
    sold: 2131,
    view: 2123,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nam Dây Nhựa Casio G-Shock GA-110-1ADR Chính Hãng - GA-110-1A",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/7c/4f/fa/895fcefc67821f75ef5c085f3d25c76b.png.webp",
    oldPrice: 3500000,
    price: 1890000,
    rating: 4.1,
    stock: 221,
    sold: 2120,
    view: 2193,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng Hồ Nam Dây Da Thời Trang Chính Hãng SKMEI 9058 Chống Nước 5ATM",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/a8/b3/68/522429754e5900f2b526f29b89788582.jpg.webp",
    oldPrice: 289000,
    price: 221900,
    rating: 1.8,
    stock: 130,
    sold: 291,
    view: 21023,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
  {
    category: "62f741b7a2ae57a2d58faff2",
    name: "Đồng hồ nam cao cấp ECONOMICXI chính hãng dây thép lưới đen có lịch ngày",
    image:
      "https://salt.tikicdn.com/cache/400x400/ts/product/65/73/0b/618814ff857cd0671005dc6c4b3d5485.jpg.webp",
    oldPrice: 239000,
    price: 139000,
    rating: 3.5,
    stock: 213,
    sold: 6643,
    view: 313424,
    description:
      "Đồng hồ không đơn thuần chỉ là 1 chiếc đồng hồ đó còn là 1 phụ kiện thời trang đẹp và sang trọng.Với thiết kế bắt mắt cùng chất liệu vỏ dây cao cấp từ inox và mặt kính cứng tăng cường độ cứng và độ bền cho chiếc đồng hồ.",
  },
];

const products = phones
  .concat(
    laptop,
    eletronicDevice,
    shopOnline,
    shopOnlineBook,
    boyFashion,
    girlFashion,
    sport,
    lifeHouse,
    watch,
  )
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default products;
