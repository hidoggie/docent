// Application State
const state = {
    currentPage: 'language',
    selectedLanguage: '',
    selectedCategory: null,
    selectedGuide: null,
    audioElement: new Audio(),
    isPlaying: false,
    currentTime: 0,
    duration: 204,
    currentImageIndex: 0,
    showDetail: false,
    dropdownOpen: false,
    isNFirst: true,
    isNLast: true,
};

// Data: Categories
const categories = [
    {
        id: 1,
        name: '제1전시관',
        nameEn: 'Exhibition Hall 1',
        description: '한국 전통 목조각 예술',
        descriptionEn: 'Korean Traditional Wood Carving Art',
        itemCount: 4,
        image: 'https://images.unsplash.com/photo-1706794831005-e0cbae755fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
        gradient: 'gradient-blue'
    },
    {
        id: 2,
        name: '제2전시관',
        nameEn: 'Exhibition Hall 2',
        description: '불교 조각 및 공예',
        descriptionEn: 'Buddhist Sculptures & Crafts',
        itemCount: 3,
        image: 'https://images.unsplash.com/photo-1627630228681-5ee2a4c564fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
        gradient: 'gradient-pink'
    },
    {
        id: 3,
        name: '제3전시관',
        nameEn: 'Exhibition Hall 3',
        description: '현대 목조각 작품',
        descriptionEn: 'Contemporary Wood Sculptures',
        itemCount: 3,
        image: 'https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
        gradient: 'gradient-purple'
    },
    {
        id: 4,
        name: '특별전시관',
        nameEn: 'Special Exhibition',
        description: '기획 전시 작품',
        descriptionEn: 'Curated Exhibition Works',
        itemCount: 2,
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
        gradient: 'gradient-yellow'
    }
];

// Data: Guides
const allGuides = [
    // Category 1
    { id: 1, categoryId: 1, title: '상수화병_전시 소개', titleEn: 'Sangsu Flower Vase', duration: '3:24', image: 'https://images.unsplash.com/photo-1706794831005-e0cbae755fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 2, categoryId: 1, title: '목조 관음보살상', titleEn: 'Wooden Avalokitesvara', duration: '4:12', image: 'https://images.unsplash.com/photo-1627630228681-5ee2a4c564fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 3, categoryId: 1, title: '전통 목각 병풍', titleEn: 'Traditional Wood Screen', duration: '2:45', image: 'https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 4, categoryId: 1, title: '목조 장승', titleEn: 'Wooden Guardian Post', duration: '3:56', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    // Category 2
    { id: 5, categoryId: 2, title: '목조 석가여래상', titleEn: 'Wooden Shakyamuni Buddha', duration: '5:20', image: 'https://images.unsplash.com/photo-1706794831005-e0cbae755fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 6, categoryId: 2, title: '삼존불 좌상', titleEn: 'Three Buddha Statues', duration: '4:35', image: 'https://images.unsplash.com/photo-1627630228681-5ee2a4c564fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 7, categoryId: 2, title: '불교 목조 공예', titleEn: 'Buddhist Wood Crafts', duration: '3:18', image: 'https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    // Category 3
    { id: 8, categoryId: 3, title: '현대 추상 조각', titleEn: 'Modern Abstract Sculpture', duration: '4:05', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 9, categoryId: 3, title: '자연을 담은 나무', titleEn: 'Nature in Wood', duration: '3:42', image: 'https://images.unsplash.com/photo-1706794831005-e0cbae755fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 10, categoryId: 3, title: '생명의 순환', titleEn: 'Cycle of Life', duration: '5:15', image: 'https://images.unsplash.com/photo-1627630228681-5ee2a4c564fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    // Category 4
    { id: 11, categoryId: 4, title: '특별전: 시간의 흔적', titleEn: 'Special: Traces of Time', duration: '6:30', image: 'https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
    { id: 12, categoryId: 4, title: '작가와의 대화', titleEn: 'Artist Talk', duration: '8:15', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
];

// Data: Player Images
const playerImages = [
    'https://images.unsplash.com/photo-1706794831005-e0cbae755fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1627630228681-5ee2a4c564fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    'https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800'
];

// Translations
const translations = {
    ko: {
        selectHall: '전시관 선택',
        selectHallDesc: '관람하실 전시관을 선택해주세요',
        audioGuides: '오디오 가이드',
        backToHalls: '전시관 목록으로',
        audio: '오디오',
        details: '상세보기',
        detailInfo: '상세 정보',
        description: '작품 설명',
        detailsLabel: '상세 정보',
        period: '시대',        
        material: '재질',
        size: '크기',
        collection: '소장처'        
    },
    en: {
        selectHall: 'Select Exhibition Hall',
        selectHallDesc: 'Please select an exhibition hall to visit',
        audioGuides: 'Audio Guides',
        backToHalls: 'Back to Halls',
        audio: 'Audio',
        details: 'Details',
        detailInfo: 'Detailed Information',
        description: 'Description',
        detailsLabel: 'Details',
        period: 'Period',
        material: 'Material',
        size: 'Size',
        collection: 'Collection'
    },
    zh: {
        selectHall: '选择展厅',
        selectHallDesc: '请选择要参观的展厅',
        audioGuides: '语音导览',
        backToHalls: '返回展厅列表',
        audio: '音频',
        details: '详情',
        detailInfo: '详细信息',
        description: '作品说明',
        detailsLabel: '详细信息',
        period: '时代',
        material: '材质',
        size: '尺寸',
        collection: '收藏处'
    },
    ja: {
        selectHall: '展示館選択',
        selectHallDesc: '見学する展示館を選択してください',
        audioGuides: 'オーディオガイド',
        backToHalls: '展示館リストに戻る',
        audio: 'オーディオ',
        details: '詳細',
        detailInfo: '詳細情報',
        description: '作品説明',
        detailsLabel: '詳細情報',
        period: '時代',
        material: '材質',
        size: 'サイズ',
        collection: '所蔵'
    }
};

const guideData = [
    {
      id: 1,
      content: {
        ko: {
          title: '상수화병_전시 소개',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 2,
      content: {
        ko: {
          title: '목조 관음보살상',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 3,
      content: {
        ko: {
          title: '전통 목각 병풍',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 4,
      content: {
        ko: {
          title: '목조 장승',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 5,
      content: {
        ko: {
          title: '목조 석가여래상',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 6,
      content: {
        ko: {
          title: '삼존불 좌상',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 7,
      content: {
        ko: {
          title: '불교 목조 공예',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 8,
      content: {
        ko: {
          title: '현대 추상 조각',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 9,
      content: {
        ko: {
          title: '자연을 담은 나무',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 10,
      content: {
        ko: {
          title: '생명의 순환',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 11,
      content: {
        ko: {
          title: '특별전: 시간의 흔적',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
    {
      id: 12,
      content: {
        ko: {
          title: '작가와의 대화',
          description: '목아박물관의 대표 소장품인 상수화병에 대한 상세한 설명입니다. 이 작품은 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다.',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '조선시대',
          materialValue: '도자기',
          sizeValue: '높이 35cm',
          collectionValue: '목아박물관',
          infoText: '이 작품은 목아박물관의 대표 소장품으로, 조선시대 도자기 예술의 정수를 보여주는 귀중한 문화재입니다. 섬세한 문양과 뛰어난 조형미가 돋보이는 작품으로, 당시 장인들의 높은 기술 수준을 엿볼 수 있습니다.'
        },
        en: {
          title: 'Sangsu Flower Vase Exhibition',
          description: 'A detailed explanation of the Sangsu flower vase, a representative collection of the MOKA Museum. This work is a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty.',
          audio: "./mp3/art1-en.mp3",
          periodValue: 'Joseon Dynasty',
          materialValue: 'Porcelain',
          sizeValue: 'Height 35cm',
          collectionValue: 'MOKA Museum',
          infoText: 'This work is a representative collection of the MOKA Museum and a valuable cultural asset that shows the essence of pottery art from the Joseon Dynasty. It is a work that stands out for its delicate patterns and excellent formative beauty, and you can glimpse the high level of skill of craftsmen at the time.'
        },
        zh: {
          title: '上水花瓶展览介绍',
          description: '木雕博物馆代表性藏品上水花瓶的详细说明。这件作品是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。',
          audio: "./mp3/art1-zh.mp3",
          periodValue: '朝鲜时代',
          materialValue: '陶瓷',
          sizeValue: '高度 35cm',
          collectionValue: '木雕博物馆',
          infoText: '这件作品是木雕博物馆的代表性藏品，是展示朝鲜时代陶瓷艺术精髓的珍贵文化遗产。这是一件以精致的图案和卓越的造型美而闻名的作品，可以窥见当时工匠的高超技艺水平。'
        },
        ja: {
          title: '上水花瓶展示紹介',
          description: '木雕博物館の代表的な所蔵品である上水花瓶についての詳しい説明です。この作品は朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。',
          audio: "./mp3/art1-ko.mp3",
          periodValue: '朝鮮時代',
          materialValue: '陶磁器',
          sizeValue: '高さ 35cm',
          collectionValue: '木雕博物館',
          infoText: 'この作品は木雕博物館の代表的な所蔵品であり、朝鮮時代の陶磁器芸術の真髄を示す貴重な文化財です。繊細な文様と優れた造形美が際立つ作品で、当時の職人たちの高い技術水準を垣間見ることができます。'
        }
      }
    },
];
// Helper Functions
function getText(key) {
    const lang = state.selectedLanguage || 'ko';
    return translations[lang]?.[key] || translations.ko[key];
}

function getTextNew(key) {
    const lang = state.selectedLanguage || 'ko';
    const art = guideData[state.selectedGuide - 1];  
   
    return art.content[lang]?.[key];
}

function getLanguageLabel(code) {
    const labels = {
        ko: '한국어',
        en: 'English',
        zh: '中文',
        ja: '日本語',
        accessibility: '저시력자'
    };
    return labels[code] || code;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// SVG Icons Library
const icons = {
    audioLines: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>',
    languages: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>',
    chevronRight: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
    chevronLeft: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>',
    chevronDown: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>',
    building: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    clock: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    headphones: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>',
    play: '<svg fill="white" width="24" height="24" viewBox="0 0 24 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg fill="white" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>',
    skipBack: '<svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-back-icon lucide-skip-back"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/></svg>',
    skipForward: '<svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward-icon lucide-skip-forward"><path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/></svg>',
    volume: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>',
    info: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    x: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    globe: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'
};

// ============================================
// Render Functions
// ============================================

function renderLanguageSelection() {
    const languages = [
        { code: 'ko', label: '한국어', icon: '<img src="./img/kr.png">' },
        { code: 'en', label: 'English', icon: '<img src="./img/en.png">' },
        { code: 'zh', label: '中文', icon: '<img src="./img/zh.png">' },
        { code: 'ja', label: '日本語', icon: '<img src="./img/ja.png">' },
        { code: 'accessibility', label: '저시력자', icon: '<img src="./img/ac.png">' }
    ];

    const languageButtons = languages.map(lang => `
        <button class="language-btn" onclick="selectLanguage('${lang.code}')">
            <div class="language-btn-content">
                <span class="language-btn-icon">${lang.icon}</span>
                <span class="language-btn-text">${lang.label}</span>
            </div>
            <div class="language-btn-arrow">
                ${icons.chevronRight}
            </div>
        </button>
    `).join('');

    return `
        <div class="language-page">
            <div class="language-bg">
                <div class="language-bg-overlay"></div>
            </div>
            <div class="language-content">
                <div class="language-header">
                    <div class="language-icon">
                        ${icons.audioLines}
                    </div>
                    <h1 class="language-title">목아박물관</h1>
                    <p class="language-subtitle">MOKA MUSEUM</p>
                </div>
                <div class="language-service-title">
                    ${icons.languages}
                    <h2>오디오 가이드 서비스</h2>
                </div>
                <div class="language-buttons">
                    ${languageButtons}
                </div>
                <div class="language-footer">
                    <p>언어를 선택하여 시작하세요</p>
                </div>
            </div>
        </div>
    `;
}

function renderHeader() {
    const lang = state.selectedLanguage || 'ko';
    var AudioEl = state.audioElement.src;
    var CurrentTime = state.currentTime;
    var isPlaying = state.isPlaying;
    var isPlayer = false;
    var isList = false;
    AudioEl = '';
    isPlaying = false;

    if (state.currentPage == 'player') 
    {
        isPlayer = true;
    }

    if (state.currentPage == 'list') {
        isList = true;
    }

    return `
        <div class="header">
            <div class="header-content">
               <button class="back-btn" onclick= "${isPlayer ? 'goToGuideList()' : (isList ? 'goToCategory()' : 'goToMain()')}"> 
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 5l-7 7 7 7"></path>
                    </svg>
                </button>
                <div class="header-logo">
                    <div class="header-logo-icon">木</div>
                    <div class="header-logo-text">
                        <h1>목아박물관</h1>
                        <p>MOKA MUSEUM</p>
                    </div>
                </div>  
                <div class="dummy">
                </div>          
                <div class="language-dropdown">
                    <button class="language-dropdown-btn" onclick="toggleDropdown()">
                        ${icons.globe}
                        <span>${getLanguageLabel(lang)}</span>
                        ${icons.chevronDown}
                    </button>
                    <div id="languageDropdown" class="language-dropdown-menu hidden">
                        <button class="language-dropdown-item ${lang === 'ko' ? 'active' : ''}" onclick="changeLanguage('ko')">한국어</button>
                        <button class="language-dropdown-item ${lang === 'en' ? 'active' : ''}" onclick="changeLanguage('en')">English</button>
                        <button class="language-dropdown-item ${lang === 'zh' ? 'active' : ''}" onclick="changeLanguage('zh')">中文</button>
                        <button class="language-dropdown-item ${lang === 'ja' ? 'active' : ''}" onclick="changeLanguage('ja')">日本語</button>
                        <button class="language-dropdown-item ${lang === 'accessibility' ? 'active' : ''}" onclick="changeLanguage('accessibility')">저시력자</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCategorySelection() {
    const lang = state.selectedLanguage || 'ko';
    
    const categoryCards = categories.map(cat => {
        const name = lang === 'ko' ? cat.name : cat.nameEn;
        const desc = lang === 'ko' ? cat.description : cat.descriptionEn;
        const count = lang === 'ko' ? `오디오 가이드 ${cat.itemCount}개` : `${cat.itemCount} Audio Guides`;
        
        return `
            <button class="category-card" onclick="selectCategory(${cat.id})">
                <div class="category-card-bg">
                    <img src="${cat.image}" alt="${name}">
                </div>
                <div class="category-card-gradient ${cat.gradient}"></div>
                <div class="category-card-content">
                    <div class="category-card-left">
                        <div class="category-card-icon ${cat.gradient}">
                            ${icons.building}
                        </div>
                        <div class="category-card-text">
                            <h3>${name}</h3>
                            <p>${desc}</p>
                            <div class="category-card-count">${count}</div>
                        </div>
                    </div>
                    <div class="category-card-arrow">
                        ${icons.chevronRight}
                    </div>
                </div>
            </button>
        `;
    }).join('');

    return `
        <div class="category-page">
            ${renderHeader()}
            <div class="category-content">
                <div class="category-title-section">
                    <h2>${getText('selectHall')}</h2>
                    <p>${getText('selectHallDesc')}</p>
                </div>
                <div class="category-grid">
                    ${categoryCards}
                </div>
            </div>
        </div>
    `;
}

function renderGuideList() {
    const lang = state.selectedLanguage || 'ko';
    const category = categories.find(c => c.id === state.selectedCategory);
    const guides = allGuides.filter(g => g.categoryId === state.selectedCategory);
    const categoryName = lang === 'ko' ? category.name : category.nameEn;
    const countText = lang === 'ko' ? `오디오 가이드 ${guides.length}개` : `${guides.length} Audio Guides`;
    
    const guideCards = guides.map(guide => {
        const title = lang === 'ko' ? guide.title : guide.titleEn;
        return `
            <button class="guide-card" onclick="selectGuide(${guide.id})">
                <div class="guide-card-inner">
                    <div class="guide-card-thumbnail">
                        <img src="${guide.image}" alt="${title}">
                        <div class="guide-card-thumbnail-overlay"></div>
                    </div>
                    <div class="guide-card-info">
                        <h3 class="guide-card-title">${title}</h3>
                        <div class="guide-card-meta">
                            <div class="guide-card-meta-item">
                                ${icons.clock}
                                <span>${guide.duration}</span>
                            </div>
                            <div class="guide-card-meta-item">
                                ${icons.headphones}
                                <span>${getText('audio')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="guide-card-play">
                        <div class="guide-card-play-btn">
                            ${icons.play}
                        </div>
                    </div>
                </div>
            </button>
        `;
    }).join('');

    return `
        <div class="guide-list-page">
            ${renderHeader()}
            <div class="guide-list-hero">
                <img src="https://images.unsplash.com/photo-1664626621784-9120efba4284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Museum">
                <div class="guide-list-hero-overlay"></div>
                <div class="guide-list-hero-content">
                    <!--button class="guide-list-back-btn" onclick="backToCategory()">
                        ${icons.chevronLeft}
                        <span>${getText('backToHalls')}</span>
                    </button-->
                    <h2>${categoryName}</h2>
                    <p>${countText}</p>
                </div>
            </div>
            <div class="guide-list-content">
                <div class="guide-list-grid">
                    ${guideCards}
                </div>
            </div>
        </div>
    `;
}

function renderPlayer() {
    const lang = state.selectedLanguage || 'ko';
    const art = guideData[state.selectedGuide - 1];  
    const data = art.content[lang] || art.content[ko];
    
    const indicators = playerImages.map((_, index) => 
        `<button class="player-slider-indicator ${index === state.currentImageIndex ? 'active' : ''}" onclick="setPlayerImage(${index})"></button>`
    ).join('');

    const progressPercent = (state.currentTime / state.duration) * 100;
 
    if (state.selectedGuide == 1) {
        state.isNFirst = false;
    }
    else {
        state.isNFirst = true;
    }

    const LastIndex = guideData[guideData.length - 1];
    const lastId = LastIndex.id;
    if (state.selectedGuide == lastId) {
        state.isNLast = false;
    } 
    else {
        state.isNLast = true;
    }  

    var Index = state.selectedGuide;
    var DispNum = String(Index).padStart(2, '0');


    return `
        <div class="player-page">
            ${renderHeader()}
            <div class="player-slider">
                <div class="player-slider-container">
                    <img src="${playerImages[state.currentImageIndex]}" alt="작품 이미지">
                    <button class="player-slider-btn prev" onclick="prevPlayerImage()">
                        ${icons.chevronLeft}
                    </button>
                    <button class="player-slider-btn next" onclick="nextPlayerImage()">
                        ${icons.chevronRight}
                    </button>
                    <div class="player-slider-indicators">
                        ${indicators}
                    </div>
                </div>
            </div>
            <div class="player-controls">
                <div class="player-controls-top">
                    <div class="track-info">
                        <div id="trackNumber" class="track-number">${DispNum}</div>
                        <h3 id="trackTitle" class="track-title">${data.title}</h3>
                    </div>
                    <div class="player-progress">
                        <input type="range" class="player-progress-bar" min="0" max="${state.duration}" 
                            value="${state.currentTime}" oninput="seekAudio(this.value)"
                            style="background: linear-gradient(to right, #3b9cff 0%, #3b9cff ${progressPercent}%, #252836 ${progressPercent}%, #252836 100%)">
                        <div class="player-progress-time">
                            <span>${formatTime(state.currentTime)}</span>
                            <span>${formatTime(state.duration)}</span>
                        </div>
                    </div>
                    <div class="player-buttons">
                        <div class="div-define">
                            ${state.isNFirst ? `<button class="player-btn-small" onclick="skipBackward()">${icons.skipBack}</button>` : ''} 
                        </div>                           
                        <button class="player-btn-large" onclick="togglePlay()">
                            ${state.isPlaying ? icons.pause : icons.play}
                        </button>      
                        <div class="div-define">                  
                            ${state.isNLast ? `<button class="player-btn-small" onclick="skipForward()">${icons.skipForward}</button>` : ''}
                        </div>    
                    </div>
                    <div class="player-volume">
                        ${icons.volume}
                        <input type="range" class="player-volume-bar" min="0" max="100" value="70">
                    </div>
                </div>
                <button class="player-detail-btn" onclick="showDetailModal()">
                    ${icons.info}
                    <span>${getText('details')}</span>
                </button>
            </div>
        </div>
    `;
}

function renderDetailModal() {
    if (!state.showDetail) return '';
    
    const lang = state.selectedLanguage || 'ko';
    const art = guideData[state.selectedGuide - 1];  
    const data = art.content[lang] || art.content.ko;
    
    const indicators = playerImages.map((_, index) => 
        `<button class="player-slider-indicator ${index === state.currentImageIndex ? 'active' : ''}" onclick="setModalImage(${index})"></button>`
    ).join('');

    return `
        <div class="modal-backdrop show" onclick="hideDetailModal()"></div>
        <div class="modal show">
            <div class="modal-handle">
                <div class="modal-handle-bar"></div>
            </div>
            <div class="modal-header">
                <h2>${getText('detailInfo')}</h2>
                <button class="modal-close-btn" onclick="hideDetailModal()">
                    ${icons.x}
                </button>
            </div>
            <div class="modal-content">
                <div class="modal-slider">
                    <div class="modal-slider-container">
                        <img src="${playerImages[state.currentImageIndex]}" alt="작품 이미지">
                        <button class="player-slider-btn prev" onclick="prevModalImage()">
                            ${icons.chevronLeft}
                        </button>
                        <button class="player-slider-btn next" onclick="nextModalImage()">
                            ${icons.chevronRight}
                        </button>
                        <div class="player-slider-indicators">
                            ${indicators}
                        </div>
                    </div>
                </div>
                <div class="modal-text">
                    <div class="modal-title-section">
                        <h3>${data.title}</h3>
                        <div class="modal-divider"></div>
                    </div>
                    <div class="modal-section">
                        <h4>${getText('description')}</h4>
                        <p>${data.description}</p>
                    </div>
                    <div class="modal-section">
                        <h4>${getText('detailsLabel')}</h4>
                        <div class="modal-details">
                            <div class="modal-detail-row">
                                <span class="modal-detail-label">${getText('period')}</span>
                                <span class="modal-detail-value">${getTextNew('periodValue')}</span>
                            </div>
                            <div class="modal-detail-row">
                                <span class="modal-detail-label">${getText('material')}</span>
                                <span class="modal-detail-value">${getTextNew('materialValue')}</span>
                            </div>
                            <div class="modal-detail-row">
                                <span class="modal-detail-label">${getText('size')}</span>
                                <span class="modal-detail-value">${getTextNew('sizeValue')}</span>
                            </div>
                            <div class="modal-detail-row">
                                <span class="modal-detail-label">${getText('collection')}</span>
                                <span class="modal-detail-value">${getTextNew('collectionValue')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-section">
                        <div class="modal-info-box">
                            <p>${getTextNew('infoText')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// Event Handlers
// ============================================

function selectLanguage(lang) {
    state.selectedLanguage = lang;
    state.currentPage = 'category';
    render();
}

function changeLanguage(lang) {
    state.selectedLanguage = lang;
    state.dropdownOpen = false;
    var PlayingFlag = state.isPlaying;

    state.currentTime = 0;
    PlayingFlag = false;

    if(state.audioElement.src != '') {
      state.audioElement.pause();    
      loadAudio(true);
    }
    render();
}

function loadAudio(autoPlay = false) {
    const lang = state.selectedLanguage;
    const index = state.selectedGuide - 1;
    const art = guideData[index];
    const content = art.content[lang];

    state.audioElement.src = content.audio;
    state.audioElement.load();
}


function toggleDropdown() {
    state.dropdownOpen = !state.dropdownOpen;
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

function selectCategory(categoryId) {
    state.selectedCategory = categoryId;
    state.currentPage = 'list';
    render();
}

function selectGuide(guideId) {
    const lang = state.selectedLanguage || 'ko';
    const art = guideData[guideId-1];  
    const content = art.content[lang];
  
    state.selectedGuide = art.id;
    state.currentPage = 'player';
    state.currentTime = 0;
    state.isPlaying = false;
    state.currentImageIndex = 0;
    state.audioElement.src = content.audio;
    state.audioElement.load();

    render();
}

function goToCategory() {
    state.currentPage = 'category';
    state.selectedCategory = null;
    state.selectedGuide = null;
    state.isPlaying = false;
    render();
}

function goToGuideList() {
    state.currentPage = 'list';
//    state.selectedCategory = null;
    state.selectedGuide = null;
    state.isPlaying = false;
    render();
}

function goToMain() {
    state.currentPage = 'language';
    state.selectedCategory = null;
    state.selectedGuide = null;
    state.isPlaying = false;
    render();    
}

function backToCategory() {
    state.currentPage = 'category';
    state.selectedCategory = null;
    state.isPlaying = false;
    render();
}

function togglePlay() {
    state.isPlaying = !state.isPlaying;
    if (state.isPlaying) {
       state.audioElement.play();
    } else {
       state.audioElement.pause();
  }


    render();
}

function seekAudio(value) {
    state.currentTime = parseInt(value);
    render();
}

function skipBackward() {
//    state.currentTime = Math.max(0, state.currentTime - 10);
    var Index = state.selectedGuide;
    if(Index != 1) {
        selectGuide(Index - 1);
    }
    render();
}

function skipForward() {
//    state.currentTime = Math.min(state.duration, state.currentTime + 10);
    var Index = state.selectedGuide;
    const LastIndex = guideData[guideData.length - 1];
    const lastId = LastIndex.id - 1;
    if(Index != lastId) {
//        state.selectedGuide = Index + 1; 
        selectGuide(Index + 1);
    }
    render();
}

function nextPlayerImage() {
    state.currentImageIndex = (state.currentImageIndex + 1) % playerImages.length;
    render();
}

function prevPlayerImage() {
    state.currentImageIndex = (state.currentImageIndex - 1 + playerImages.length) % playerImages.length;
    render();
}

function setPlayerImage(index) {
    state.currentImageIndex = index;
    render();
}

function showDetailModal() {
    state.showDetail = true;
    render();
}

function hideDetailModal() {
    state.showDetail = false;
    render();
}

function nextModalImage() {
    state.currentImageIndex = (state.currentImageIndex + 1) % playerImages.length;
    render();
}

function prevModalImage() {
    state.currentImageIndex = (state.currentImageIndex - 1 + playerImages.length) % playerImages.length;
    render();
}

function setModalImage(index) {
    state.currentImageIndex = index;
    render();
}

// ============================================
// Main Render Function
// ============================================

function render() {
    const app = document.getElementById('app');
    let content = '';

    switch (state.currentPage) {
        case 'language':
            content = renderLanguageSelection();
            break;
        case 'category':
            content = renderCategorySelection();
            break;
        case 'list':
            content = renderGuideList();
            break;
        case 'player':
            content = renderPlayer();
            break;
    }

    app.innerHTML = content + renderDetailModal();

    // Handle audio playback
    if (state.isPlaying && state.currentPage === 'player') {
        if (!window.audioInterval) {
            window.audioInterval = setInterval(() => {
                if (state.currentTime >= state.duration) {
                    state.isPlaying = false;
                    clearInterval(window.audioInterval);
                    window.audioInterval = null;
                    render();
                } else {
                    state.currentTime++;
                    render();
                }
            }, 1000);
        }
    } else {
        if (window.audioInterval) {
            clearInterval(window.audioInterval);
            window.audioInterval = null;
        }
    }
}

// ============================================
// Event Listeners
// ============================================

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-dropdown')) {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
            state.dropdownOpen = false;
        }
    }
});

// ============================================
// Initialize Application
// ============================================

render();
