# Hệ thống quản lý công việc xây dựng bằng Vue.js & Node.js

<a href="https://github.com/trantoan960/task-management"><img
  src="https://github.com/trantoan960/NguyenGiaWebsite.vn/blob/master/skyalbert.jpeg" alt="Normalize Logo"
  width="80" height="80" style="border-radius: 50%" align="right"></a>

> Một project thực hiện để làm đồ án trường Đại học công nghiệp Hà Nội, khóa 10. Dự án được phát triển dựa trên 2 thành phần chính là Vue.js và Node.js, hai trong những công nghệ hot nhất ở thời điểm làm dự án này. If you don't know vietnamese, please click me, read by english. Thanks!

## Giới thiệu
Đây là dự án làm cá nhân, vui lòng không sử dụng nó dưới hình thức thương mại, tất cả các thành phần code đều được đăng ký MIT. Mọi người có thể đóng góp bằng cách tạo các cuộc trò chuyện. Chúng tôi rất biết ơn, nếu bạn là một phần của project.

Công nghệ sử dụng ở đây gồm có:
* Node.js làm back-end phục vụ phía server
* Sử dụng Node.js để viết REST API ( phục vụ cho client sử dụng vào giao thức )
* Vue.js làm nhân cho client ( giúp các thành phần trong client load nhanh hơn và dễ hơn )
* MongoDB ( để tránh việc khi hệ thống có nhiều người dùng và dễ giải quyết vấn đề quá tải )
* Socket.io ( xây dựng chat realtime và quản lý realtime )
* Custom.js ( trong dự án có một số những plugins do chính các thành viên tự viết ra và tùy chỉnh để giúp hệ thống hoạt động trơn tru hơn )

## Cài đặt

> Nếu bạn muốn sử dụng, hoặc demo sản phẩm, máy tính của bạn phải có Node.js là điều bắt buộc. Nếu bạn chưa từng biết về nó bạn có thể tham khảo tại link Youtube channel của mình bên dưới cùng của documentation.


Khi bạn đã cài đặt Node.js, hãy làm theo như sau:
```sh
// clone project from github
git clone https://github.com/trantoan960/task-management

// Access folder project
cd task-management

// Install package for client
cd client
npm install
cd ../

// Install package for server
cd server
npm install
cd ../

// Running Server (Note: If u don't running, client will not data to show.)
cd server
npm start

// Running Client (Note: U have to open new terminal)
cd client
npm run start
```

## Thành viên
Thành viên nhóm gồm:
* Trần Quốc Toản
* Vũ Hồng Quân

## Đã hoàn thiện
> Dưới đây là danh sách các modules đã hoàn thiện theo list danh sách mà các thành viên thực hiện, lần lượt bên dưới là các modules sẽ cập nhật và các vấn đề đang gặp phải.
* Hoàn thiện Front-End
* Xây dựng xong Công việc (Trello)
* Xây dựng xong Dự án
* Xây dựng quản lý phân quyền (Portal)
* Sử dụng API để làm các modules trên (Cấu phần)

## Đang cập nhật
* Chat Realtime, cho phép người dùng sử dụng ở trang web của họ.
* Quản lý nhóm.
* Quản lý email.
* Chức năng kết bạn.
* Chức năng đăng bài trong project
* Chức năng thiết lập giao diện cho các thành phần

## Vấn đề đang gặp phải
* Issues #1: Sau khi đăng nhập thì không load được file app.init.js Nên giao diện không load được hết css
* Issues #2: Xây dựng hoàn thiện API để chat với nhau và tạo phòng chat. Cần thời gian để xây dựng giao diện và đổ API vào.
* Issues #3: Sau khi đã thêm được công việc, chưa thêm được công việc đó vào trong bảng thời gian biểu để người dùng dễ quản lý hơn với mốc thời gian. Giải pháp tạm thời: Chưa có
* Issues #4: Sử dụng email để quản lý trực tiếp tại hệ thống đang bị google cấm điều khoản sử dụng api theo hình thức này. Nhóm đang tìm cách thay thế để hoàn thiện chức năng này.
* Đang cập nhật...

## Các link liên quan:
My Facebook: https://www.facebook.com/trantoan.960
My Partner Facebook: https://www.facebook.com/quan.tiny
My Channel: https://www.youtube.com/c/skyalbertchannel
My Team Discord: https://discord.gg/C5XwJgr

Documentation sẽ được cập nhật thường xuyên, bạn có thể quay lại vào một khoảng thời gian cần thiết. Cảm ơn!!!!!!!!!!


