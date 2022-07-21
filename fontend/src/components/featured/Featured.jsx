import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            {/* adventure */}
            <option>Thể loại</option>
            <option value="Cuộc phiêu lưu">Cuộc phiêu lưu</option>
            <option value="Hài kịch">Hài kịch</option>
            <option value="Tội phạm">Tội phạm</option>
            <option value="Tưởng tượng">Tưởng tượng</option>
            <option value="Lịch sử">Lịch sử</option>
            <option value="Rùng rợn">Rùng rợn</option>
            <option value="Lãng mạn">Lãng mạn</option>
            <option value="drama">Drama</option>
            <option value="Phim tài liệu">Phim tài liệu</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Xem phim</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Thông tin </span>
          </button>
        </div>
      </div>
    </div>
  );
}
