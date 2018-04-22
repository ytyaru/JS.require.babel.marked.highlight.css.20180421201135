define(function() {
    return class Default {
	get Markdown() {
	    return `# Markdownタイトル

* A
* B

A|B
-|-
1|2
3|4

C|D
-|-
A|* A1  
* A2
B|* B1  
* B2

## H2
### H3
#### H4
##### H5
###### H6

## new line

スペース二つで\`<br/>\`  改行された？

ふつうに1行の改行で\`<br/>\`されると思うが。
改行された？

行末にスペース二つ入れて1行改行すると、  
改行された？

2行の改行で\`<p>\`の終わりを示す。

新しい段落（パラグラフ）？

## code

### shell

\`\`\`shell:main.sh
# コメント
Print () {
    local value=Some Value
    echo $value
}
Print()
\`\`\`

### python

\`\`\`python:main.py
import sys
sys.path.append('.')
print(sys.argv)

class A:
    def __init__(self): pass

if __name__ == '__main__':
    A()
\`\`\`

### js

\`\`\`js:index.js
// コメント
var val = 0;
for (var i=0; i<10; i++) {
    console.log(i);
}
alert('Finished.');
\`\`\`

### html

\`\`\`html:index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>require + jQuery</title>
    <script src="main.js"></script>
</head>
<body></body>
</html>
\`\`\`

### markdown

\`\`\`markdown:ReadMe.md
<!-- HTML comment -->

# Title
## H2
### H3
#### H4
##### H5
###### H6

* A
* B

A|B
-|-
1|2
3|4

*AAA*

[Google](https://www.google.co.jp)
\`\`\`

\`\`\`markdown:LICENSE.md
# ライセンスだよ
\`\`\`

`;
	}
    };
    return Default;
});
