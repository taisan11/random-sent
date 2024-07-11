import * as kuromoji from "kuromoji";

// トークナイザーのビルド
function buildTokenizer() {
    return new Promise<kuromoji.Tokenizer<kuromoji.IpadicFeatures>>((resolve, reject) => {
        kuromoji.builder({ dicPath: "node_modules/kuromoji/dict" }).build((err, tokenizer) => {
            if (err) {
                reject(err);
            } else {
                resolve(tokenizer);
            }
        });
    });
}

async function main() {
    // トークナイザーのビルド
    const tokenizer = await buildTokenizer();

    // 解析するテキスト
    const text = "マイクラをやりたいです。";

    // 形態素解析の実行
    const tokens = tokenizer.tokenize(text);

    console.log(tokens);

    // 固有表現抽出の実行
    // const properNouns = tokens.filter(
    //     token => token.pos === "名詞" && token.pos_detail_1 === "固有名詞");
    // console.log(properNouns);
}

main();