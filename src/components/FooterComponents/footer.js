import './footer.css';
import { FacebookOutlined } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';

export const Footer = () => {
    return<>
        <footer class="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">
      <div class="">
                <img src="img/logo/logo.png" alt="Logo"/>
            </div>
        <div class="col-md-4">
          <h4>Thông tin liên hệ</h4>
          <ul class="contact-info">
            <li><i class="fas fa-map-marker-alt"></i> 123 Đường ABC, Thành phố XYZ</li>
            <li><i class="fas fa-phone"></i> +123 456 789</li>
            <li><i class="fas fa-envelope"></i> info@example.com</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Danh mục</h4>
          <ul class="footer-menu">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Theo dõi chúng tôi</h4>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"><FacebookOutlined /></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"><TwitterOutlined /></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i><InstagramOutlined /></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i><LinkedinOutlined /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>&copy; 2024 Everlasting. Bản quyền bởi Kelsey</p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
}
