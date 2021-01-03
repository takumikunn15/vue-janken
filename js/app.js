const Janken = {
    data() {
        return { 
            hand: ['ぐー', 'ちょき', 'ぱー'],
            enemyHandImage: ['./img/janken_gu.png', './img/janken_choki.png', './img/janken_pa.png', ],
            enemyHandImageIndex: 0,
            result: '勝敗:',
        };
    },
    methods: {
        fight(myHand) {
            var handName = this.hand;
            // 敵の手をランダムに決める
            // 0 1 2いずれかをランダムに選択
            var index = Math.floor(Math.random() * Math.floor(3));
            // あいての手をenemyHandに代入
            this.enemyHandImageIndex = index;
            // 自分の手と比較する関数
            function checkJanken(a, b) {
                var c = (a - b + 3) % 3;
                if (c == 0) {
                    return "勝敗:あいて:" + handName[a] + " あなた:" + handName[b] + " ドロー!";
                } else if (c == 2) {
                    return "勝敗:あいて:" + handName[a] + " あなた:" + handName[b] + " まけ！";
                } else {
                    return "勝敗:あいて:" + handName[a] + " あなた:" + handName[b] + " かち！";
                }
            }
            // 結果の代入
            this.result = checkJanken(index, myHand);
        }
    }
};

Vue.createApp(Janken).mount('#app');