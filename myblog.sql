-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 21, 2019 lúc 05:29 PM
-- Phiên bản máy phục vụ: 10.1.31-MariaDB
-- Phiên bản PHP: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `myblog`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `members`
--

INSERT INTO `members` (`id`, `username`, `password`, `role_id`) VALUES
(1, 'admin', '123456', 1),
(2, 'member1', '123456', 2),
(3, 'member3', '123456', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `detail` text COLLATE utf8_unicode_ci NOT NULL,
  `type_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_submit` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `view_total` int(11) NOT NULL DEFAULT '0',
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `title`, `description`, `detail`, `type_id`, `user_id`, `date_submit`, `view_total`, `image`) VALUES
(1, 'My first post', 'Hello , welcome to my blog. Have fun.', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 2, 1, '2019-05-18 03:28:35', 2, ''),
(2, 'Vietnam makes its first 5G phone call', 'Vietnam’s first 5G phone call was made Friday on the network of Viettel, the country’s largest telecommunications company.', 'The trial call, made publicly with the participation of the Ministry of Information and Communications, showed that the speed of Viettel\'s 5G mobile network connections reached 1.5-1.7 Gigabits per second, far exceeding the theoretical limit of the 4G network and equivalent to the speed of optical cable.\r\n\r\nViettel said it will expand the test to Hanoi and Ho Chi Minh City, the nation’s two biggest cities, and expects to launch the commercial service in 2020.\r\n\r\nThe military-run company said it is looking at many pricing plans for commercial 5G services.\r\n\r\nMinister of Information and Communications Nguyen Manh Hung, who led Viettel earlier, said the event marked Vietnam as one of the earliest nations in the world to successfully test the 5G network, after the U.S., Australia, Japan and South Korea.\r\n\r\n\"We all want to take the lead in the fourth industrial revolution and develop information and communications technology so that Vietnamese locals and businesses can compete in the global economy, and therefore, the earlier we launch the 5G service, the better,\" he said.\r\n\r\nViettel became the first firm to receive permission to trial 5G services in January. It was followed by MobiFone.\r\n\r\nLast November, Hung said at a conference that Vietnam should test 5G in 2019 and ensure nationwide coverage by 2020.\r\n\r\n\"Vietnam should be one of the first countries to launch the network, at least in Hanoi and HCMC,\" he had said. The country had been one of the last in Southeast Asia to roll out 4G services.\r\n\r\n5G is the latest generation of mobile Internet connectivity, and should offer much faster speeds and more reliable connections on smartphones and other devices compared to the current 3G and 4G technologies.', 5, 2, '2019-05-18 04:03:43', 1, ''),
(3, 'Kevin De Bruyne: ‘We were just better than Liverpo', 'Manchester City midfielder missed much of the title triumph but an FA Cup final win over Watford would offer consolation', 'Kevin De Bruyne offers a blunt response when considering whether he has any sympathy for Liverpool after they accumulated 97 points and still finished one behind the champions Manchester City.\r\n\r\n“No,” he says. “It’s a remarkable effort but it means that we were just better than them in the end. I don’t feel sorry for them because I don’t think they’d feel sorry for us. I don’t think anybody felt sorry about the way we went out of the Champions League.”\r\n\r\nThe Belgian is in training kit and soft shoes at the City Football Academy training base on the eve of Saturday’s FA Cup final against Watford. An endearing straight-talker, De Bruyne’s last reference is to how Tottenham Hotspur eliminated City on away goals after Raheem Sterling had a late winner disallowed through a VAR ruling.\r\n\r\n\r\nManchester City need Champions League win to be the best, says Guardiola\r\n Read more\r\nFollowing Sunday’s 4-1 win at Brighton & Hove Albion that confirmed City as back-to-back champions, a film emerged of singing on the club plane as it flew back to Manchester. The song was one City fans have directed at Liverpool and which features a line about their supporters being “battered”, and another that mentions “victims”, which has caused some offence on Merseyside.\r\n\r\nDe Bruyne’s comments, though, are not related to any of this. And he does soften his stance somewhat regarding Liverpool’s second place. “I know how they feel because you’re going to feel disappointed,” the 27-year-old says. “We’d feel the same if it happened to us. But we’re still competitors. We want to win as much as they do but I can understand the feelings they have.”\r\n\r\nHe is equally honest when discussing how Pep Guardiola gave him a ticking-off for walking down the tunnel when being substituted against Burton Albion in January.\r\n\r\nAdvertisement\r\n\r\nFrustration had bubbled over after 58 minutes of the 9-0 trouncing of Burton at the Etihad Stadium. Two serious knee injuries meant De Bruyne did not start a Premier League match until the 2-1 Boxing Day defeat at Leicester City. The Carabao Cup game against Nigel Clough’s side was only a 10th appearance this season and a fifth start. When Guardiola replaced him with Phil Foden, De Bruyne stormed past the manager for the dressing room. With a smile he explains why.\r\n\r\n“Pep knows [I was frustrated]. After I shouldn’t really have left but sometimes emotions come up and at the time I thought it was a good game for me. It was already 5-0 and at that moment I was like: ‘I need the game time. I can be still important.’”\r\n\r\nWas he told off? “Yeah,” De Bruyne says, to laughter. If this illustrates the tight rein Guardiola has on even his brightest stars – the midfielder was City’s 2017-18 player of the season – De Bruyne’s discontent at managing only 11 league starts, and featuring in half (19) of the campaign’s games, is understandable.\r\n\r\nThe Belgium international’s first injury was to the medial ligaments of his right knee and was suffered during training on 16 August. It came following a substitute appearance in the opening match of the season, a 2-0 win at Arsenal. This ruled him out for two months. After another four appearances he then hurt ligaments in his left knee near the end of a 2-0 Carabao Cup victory against Fulham on 1 November and was out for six weeks.\r\n\r\nDe Bruyne’s rotten luck was compounded when, after a clear run of fitness, he hurt a hamstring before half-time of the 1-0 victory over Tottenham on 20 April. Initially he thought his season was over but he was able to return for the closing minutes of the victory at Brighton.\r\n\r\nDe Bruyne says: “It’s been one of those years where I started really badly with two big injuries. I came back in the right way but obviously my body couldn’t cope with all the games. If you play once a week, you will be fine but I played five or six games in two and a half weeks and my body just said: ‘No, it’s not possible.’”\r\n\r\nSome footballers consult psychologists when injury plagues them. “No, no,” he says. “The first two were accidents. It doesn’t matter about a physio or whatever; they just happened. The first I twisted my ankle and it just went. The second the guy [Timothy Fosu-Mensah] just fell on my knee. If he falls 10cm next to me then nothing happens.\r\n\r\n“I knew my body was not ready to cope with the physicality of all those games in a row. I’ve no doubt in my mind that after a good summer break and preparation everything will be fine. I’m fine. For me this season, mentally, has been over since the Tottenham game. It’s good to be back with the team for the prizes, the Brighton game and now the final.”\r\n\r\nThe FA Cup is the one domestic honour De Bruyne has never claimed so that achievement would offer some succour. “It would make up for it in a way,” he says. “But obviously it’s not been the most fun season. In another way I can’t complain because I’ve been playing football for 10 or 11 years and not had many injuries in that regard. I’ve played almost 500 games in my career, so it’s a lot.”\r\n\r\nDe Bruyne, whose second son was born while he was out with injury, has said he could lose his temper when much younger. Yet despite being calmer now he believes passion on the field is a release from the modern-day need to be robotic in public life.\r\n\r\n“For me football is still a game of emotions,” he says. “I don’t like how people try to get emotions out of the game, because what it’s about is having fun, enjoying. If you win you’re happy, if you lose you are sad. And that’s what it’s all about.\r\n\r\n“That’s why I also don’t like the new things like VAR because it takes, for me, all the passion out and it becomes more – you need be more like a robot these days. And, how you act as an athlete in public – and just in general – you can’t let your emotions out because every emotion that comes out is going to be published or on social media in a bad way. So you have to try and control yourself.\r\n\r\n“When it happens on the field you don’t care what people are going to say. If it comes out it comes out, you’re so focused on what you’re going to do – if you’re angry you’re angry and, if it comes out, that’s it.”\r\n\r\nYet when asked whether he dreams of scoring the Cup final’s winning goal against Watford, De Bruyne’s initial response is the classic footballer’s straight bat about the team being victorious.\r\n\r\nPushed, though, as to whether he would be as cool if, say, he were to score 10 goals in the Wembley showpiece a smile appears. “Well, no, you’d feel very happy,” he says. “It’s a proud moment. In the end you always want to do well for yourself but you can only do it if you win.”', 4, 3, '2019-05-18 04:06:11', 0, ''),
(4, 'LAB DIAMONDS: WHAT YOU NEED TO KNOW', 'It’s claimed that lab diamonds could provide a sustainable solution to the unpredictable diamond trade, raising ethical standards and cutting out harmful mining practices. But how does it work? And do lab diamonds look as good as the mined variety? We fin', 'It’s a brilliant idea: within a lab, scientists grow diamonds from carbon, cleverly lessening the environmental and ethical strain often associated with using mined diamonds in jewels.\r\n\r\nNot only are the diamonds said to be identical to their mined counterparts, but they offer a sustainable solution to our sparkler habit if the lab itself works hard to maintain high ethical standards that is.\r\n\r\nBut how exactly are lab diamonds made? And are they as beautiful as mined diamonds? Jason D\'Heureux, creative Director of leading ethical jeweller, Taylor & Hart, who offer customers the option to use lab-grown diamonds in their engagement ring collection, explains more.\r\n\r\n“Lab-grown diamonds are made in laboratories using one of two methods: either by replicating the high pressure and high temperature (HPHT) found in the earth’s mantle where mined diamonds are formed, or by using superheated gas (CVD) to grow the diamond crystal.\r\n\r\n', 1, 2, '2019-05-18 04:08:24', 1, ''),
(5, 'My Second Post', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', 'Where does it come from?\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 2, 1, '2019-05-20 14:27:26', 0, ''),
(6, 'Where can I get some?', '1914 translation by H. Rackham', '\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"', 2, 3, '2019-05-21 02:01:34', 1, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post_type`
--

CREATE TABLE `post_type` (
  `id` int(11) NOT NULL,
  `name_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post_type`
--

INSERT INTO `post_type` (`id`, `name_type`) VALUES
(1, 'cultural'),
(5, 'science and technology'),
(2, 'society'),
(4, 'sport');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'member');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role_id` (`role_id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `post_type`
--
ALTER TABLE `post_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name_type` (`name_type`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `post_type`
--
ALTER TABLE `post_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `members_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Các ràng buộc cho bảng `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `post_type` (`id`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `members` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
