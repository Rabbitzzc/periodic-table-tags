/**
 * tags 配置
 * name: 文件名称
 * mdnurl: 基本描述
 * w3curl: 参考链接
 * class: 分类,通过空格分隔 hmtl5 removed (跟，嵌入，表单等等) 闭合|非闭合closed 块级|内联 blocked
 */
/**
根元素：rootval   1
表单元素： formval   15
表格元素:  tableval  10
元数据脚本：metascriptval  8
嵌入：embedval  12
文本语义：textval 28
分组：groupval  14
文档内容： documentval  15
互动：interactiveval  4
 */

export const tags = [
    [
      {
        name: 'html',
        mdnurl: 'The top level (root) element of an HTML document.',
        cndesc: '定义 HTML 文档',
        w3curl: 'https://www.w3.org/TR/html5/semantics.html#the-html-element',
        code: '<html lang="en">...</html>',
        class: 'rootval'
      },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      {
        name: 'table',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-table-element',
        class: 'tableval',
        cndesc: '定义表格',
        code: '<table><tr><td>Cell</td></tr></table>'
      }
    ],
    [
      {
        name: 'head',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-head-element',
        class: 'metaval',
        cndesc: '定义关于文档的信息',
        code: ''
      },
      {
        name: 'span',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-span-element',
        class: 'textval',
        cndesc: '',
        code: '<span class="name">Text</span>'
      },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      {
        name: 'div',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-div-element',
        class: 'blockval',
        cndesc: '定义文档中的节',
        code: '<div>...</div>'
      },
      {
        name: 'fieldset',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset',
        w3curl: 'https://www.w3.org/TR/html5/rendering.html#the-fieldset-element',
        class: 'formval',
        cndesc: '定义围绕表单中元素的边框',
        code: '<fieldset><legend>Address</legend>...</fieldset>'
      },
      {
        name: 'form',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form',
        w3curl: 'https://www.w3.org/TR/html5/forms.html#the-form-element',
        class: 'formval',
        cndesc: '定义一个 HTML 表单，用于用户输入',
        code: '<form action="/submit" method="post">...</form>'
      },
      {
        name: 'meter',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-meter-element',
        class: 'formval',
        cndesc: '定义度量衡。仅用于已知最大和最小值的度量',
        code: '<meter min="10" max="20" value="15">15 points</meter>'
      },
      {
        name: 'body',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-body-element',
        class: 'documentval',
        cndesc: '定义文档的主体',
        code: '<body><h1>Welcome</h1>...</body>'
      },
      {
        name: 'h1',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h1>My Blog</h1>'
      },
      {
        name: 'col',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-col-element',
        class: 'tableval',
        cndesc: '定义表格中一个或多个列的属性值',
        code: '<colgroup><col /><col span="2" /></colgroup>'
      },
      {
        name: 'thead',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-thead-element',
        class: 'tableval',
        cndesc: '定义表格中的表头内容',
        code: '<thead>...</thead><tbody>...</tbody>'
      }
    ],
    [
      {
        name: 'title',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-title-element',
        class: 'metaval',
        cndesc: '为文档定义一个标题',
        code: '<title>My Blog</title>'
      },
      {
        name: 'a',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-a-element',
        class: 'textval',
        cndesc: '定义一个链接',
        code: '<a href="#">Home</a>'
      },
      {
        name: 'em',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-em-element',
        class: 'textval',
        cndesc: '定义强调文本',
        code: '<p>You <em>must</em> do it!</p>'
      },
      {
        name: 'strong',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-strong-element',
        class: 'textval',
        cndesc: '定义语气更为强烈的强调文本',
        code: '<p><strong>Warning:</strong> do not...</p>'
      },
      {
        name: 'small',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-small-element',
        class: 'textval',
        cndesc: '定义小号文本',
        code: '<small>Copright, 2019</small>'
      },
      {
        name: 'cite',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-cite-element',
        class: 'textval',
        cndesc: '定义引用(citation)',
        code: '<q>Quoted text</q> <cite>— Author Name</cite>'
      },
      {
        name: 's',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-s-element',
        class: 'textval',
        cndesc: '定义加删除线的文本',
        code: '<p>Price: <s>$10.00</s> $5.00</p>'
      },
      {
        name: 'q',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-q-element',
        class: 'textval',
        cndesc: '定义一个短的引用',
        code: 'She said <q cite="https://...">quotation.</q>'
      },
      {
        name: 'p',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-p-element',
        class: 'blockval',
        cndesc: '定义一个段落',
        code: '<p>Once upon a time...</p>'
      },
      {
        name: 'hr',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr',
        w3curl: 'https://www.w3.org/TR/html5/rendering.html#the-hr-element',
        class: 'blockval',
        cndesc: '定义水平线',
        code: '<p>Text</p><hr /><p>Text</p>'
      },
      {
        name: 'figcaption',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-figcaption-element',
        class: 'blockval',
        cndesc: '定义一个 caption for a <figure> element',
        code: '<figcaption>Caption for image.</figcaption>'
      },
      {
        name: 'select',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-select-element',
        class: 'formval',
        cndesc: '定义选择列表（下拉列表）',
        code: '<select name="currency"><option ... /><option ... /></select>'
      },
      {
        name: 'option',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-option-element',
        class: 'formval',
        cndesc: '定义选择列表中的选项',
        code: '<option value="AU">Australia</option>'
      },
      {
        name: 'legend',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend',
        w3curl: 'https://www.w3.org/TR/html5/forms.html#the-legend-element',
        class: 'formval',
        cndesc: '定义 fieldset 元素的标题',
        code: '<fieldset><legend>Name</legend>...</fieldset>'
      },
      {
        name: 'section',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-section-element',
        class: 'documentval',
        cndesc: '定义了文档的某个区域',
        code: '<section><h1>Chapter 1</h1>...</section>'
      },
      {
        name: 'h2',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h2>Heading</h2>'
      },
      {
        name: 'colgroup',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-colgroup-element',
        class: 'tableval',
        cndesc: '定义表格中供格式化的列组',
        code: '<colgroup><col /><col span="2" /></colgroup>'
      },
      {
        name: 'tbody',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-tbody-element',
        class: 'tableval',
        cndesc: '定义表格中的主体内容',
        code: '<table><tbody>...</tbody></table>'
      }
    ],
    [
      {
        name: 'meta',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-meta-element',
        class: 'metaval',
        cndesc: '定义关于 HTML 文档的元信息',
        code: '<meta name="keywords" content="Blog" />'
      },
      {
        name: 'template',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template',
        w3curl: 'https://www.w3.org/TR/html5/semantics-scripting.html#the-template-element',
        class: 'metaval',
        cndesc: '定义模板信息',
        code: '<template id="msg">Hi <b class="name" />.</template>'
      },
      {
        name: 'abbr',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-abbr-element',
        class: 'textval',
        cndesc: '定义一个缩写',
        code: 'This is <abbr title="Hypertext...">HTML</abbr>.'
      },
      {
        name: 'data',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-data-element',
        class: 'textval',
        cndesc: '提供内容的机器可读和人类可读的值',
        code: '<p>Color: <data value="#f00">red</data>.</p>'
      },
      {
        name: 'time',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time',
        w3curl: 'https://www.w3.org/TR/html5/rendering.html#the-time-element',
        class: 'textval',
        cndesc: '定义一个日期/时间',
        code: '<time datetime="2017-01-01">1y ago</time>.'
      },
      {
        name: 'code',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-code-element',
        class: 'textval',
        cndesc: '定义计算机代码文本',
        code: '<p>Call <code>Date.now()</code>.</p>'
      },
      {
        name: 'var',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-var-element',
        class: 'textval',
        cndesc: '定义文本的变量部分',
        code: '<var>x</var> = <var>y</var> - 10'
      },
      {
        name: 'samp',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-samp-element',
        class: 'textval',
        cndesc: '定义计算机代码样本',
        code: '<samp>Scan complete</samp> will be printed.'
      },
      {
        name: 'br',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-br-element',
        class: 'blockval',
        cndesc: '定义简单的折行',
        code: '<p>Name<br />Main Street<br />Cityville</p>'
      },
      {
        name: 'pre',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-pre-element',
        class: 'blockval',
        cndesc: '定义预格式文本',
        code: '<pre>some.code()</pre>'
      },
      {
        name: 'figure',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-figure-element',
        class: 'blockval',
        cndesc: 'figure 标签用于对元素进行组合',
        code: '<figure><img /><figcaption /></figure>'
      },
      {
        name: 'label',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label',
        w3curl: 'https://www.w3.org/TR/html5/forms.html#the-label-element',
        class: 'formval',
        cndesc: '定义 input 元素的标注',
        code: '<label for="name">Name</label>'
      },
      {
        name: 'optgroup',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-optgroup-element',
        class: 'formval',
        cndesc: '定义选择列表中相关选项的组合',
        code: '<optgroup label="Countries"><option ... /></optgroup>'
      },
      {
        name: 'menu',
        mdnurl: 'https://developer.mozilla.org/en/HTML/Element/menu',
        w3curl: 'http://www.w3.org/TR/html5/interactive-elements.html#menus',
        class: 'interactiveval',
        cndesc: '定义菜单列表',
        code: '<menu><li>...</li></menu>'
      },
      {
        name: 'nav',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-nav-element',
        class: 'documentval',
        cndesc: '定义导航链接',
        code: '<nav><a href="/">Home</a>...</nav>'
      },
      {
        name: 'h3',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h3>Heading</h3>'
      },
      {
        name: 'caption',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-caption-element',
        class: 'tableval',
        cndesc: '定义表格标题',
        code: '<table><caption>Sales</caption>...</table>'
      },
      {
        name: 'tfoot',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-tfoot-element',
        class: 'tableval',
        cndesc: '定义表格中的表注内容（脚注）',
        code: '<thead>...</thead><tbody>...</tbody>'
      }
    ],
    [
      {
        name: 'base',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-base-element',
        class: 'metaval',
        cndesc: '定义页面中所有链接的默认地址或默认目标',
        code: '<base url="https://example.com/blog/" />'
      },
      {
        name: 'slot',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot',
        w3curl: '',
        class: 'metaval',
        cndesc: '定义操作，用于填充',
        code: '<slot name="count">0 comments</slot>'
      },
      {
        name: 'kbd',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-kbd-element',
        class: 'textval',
        cndesc: '定义键盘文本',
        code: 'Type <kbd>ls -l</kbd> to list files.'
      },
      {
        name: 'sub',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-sub-and-sup-elements',
        class: 'textval',
        cndesc: '	定义下标文本',
        code: 'H<sub>2</sub>O is the symbol for water.'
      },
      {
        name: 'sup',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-sub-and-sup-elements',
        class: 'textval',
        cndesc: '定义上标文本',
        code: '10<sup>2</sup> is 100.'
      },
      {
        name: 'i',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-i-element',
        class: 'textval',
        cndesc: '定义斜体文本',
        code: '<p>The term <i>déjà vu</i> means...</p>'
      },
      {
        name: 'b',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-b-element',
        class: 'textval',
        cndesc: '定义粗体文本',
        code: '<p>Stack uses <b>HTML</b> and <b>CSS</b>.'
      },
      {
        name: 'mark',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element',
        class: 'textval',
        cndesc: '定义带有记号的文本',
        code: 'Text with <mark>noteworthy phrase</mark>.'
      },
      {
        name: 'ol',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-ol-element',
        class: 'blockval',
        cndesc: '定义一个有序列表',
        code: '<ol><li>Item</li><li>Item</li></ol>'
      },
      {
        name: 'ul',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-ul-element',
        class: 'blockval',
        cndesc: '定义一个无序列表',
        code: '<ul><li>Item</li><li>Item</li></ul>'
      },
      {
        name: 'li',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-li-element',
        class: 'blockval',
        cndesc: '定义一个列表项',
        code: '<li>Item</li>'
      },
      {
        name: 'input',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-input-element',
        class: 'formval',
        cndesc: '定义一个输入控件',
        code: '<input type="text" id="name" />'
      },
      {
        name: 'output',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-output-element',
        class: 'formval',
        cndesc: '定义一个计算的结果',
        code: '<output name="result">10</output>'
      },
      {
        name: 'command',
        mdnurl: 'https://developer.mozilla.org/en/HTML/Element/command',
        w3curl: 'http://www.w3.org/TR/html5/interactive-elements.html#the-command',
        class: 'interactiveval',
        cndesc: '定义用户可能调用的命令（比如单选按钮、复选框或按钮）',
        code: '<command type="command">Save</command>'
      },
      {
        name: 'main',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-main-element',
        class: 'documentval',
        cndesc: '定义文档的主要内容',
        code: 'main><h1>About Me</h1>...</main>'
      },
      {
        name: 'h4',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h4>Heading</h4>'
      },
      {
        name: 'aside',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-aside-element',
        class: 'documentval',
        cndesc: '定义其所处内容之外的内容',
        code: '<aside><h1>Related Links</h1>...</aside>'
      },
      {
        name: 'tr',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-tr-element',
        class: 'tableval',
        cndesc: '定义表格中的行',
        code: '<tr><td>One</td><td>Two</td></tr>'
      }
    ],
    [
      {
        name: 'link',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-link-element',
        class: 'metaval',
        cndesc: '定义文档与外部资源的关系',
        code: '<link href="/blog.css" rel="stylesheet" />'
      },
      {
        name: 'noscript',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript',
        w3curl: 'https://www.w3.org/TR/html5/semantics-scripting.html#the-noscript-element',
        class: 'metaval',
        cndesc: '定义针对不支持客户端脚本的用户的替代内容',
        code: '<noscript><p>No JS.</p></noscript>'
      },
      {
        name: 'ruby',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-ruby-element',
        class: 'textval',
        cndesc: '定义 ruby 注释（中文注音或字符）',
        code: '<ruby><rb>♥</rb><rt>Heart</rt></ruby>'
      },
      {
        name: 'rb',
        mdnurl: '',
        w3curl: 'https://www.w3.org/TR/html5/textlevel-semantics.html#the-rb-element',
        class: 'textval',
        cndesc: '注音标识对象',
        code: '<ruby><rb>♥</rb><rt>Heart</rt></ruby>'
      },
      {
        name: 'rt',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-rt-element',
        class: 'textval',
        cndesc: '定义字符（中文注音或字符）的解释或发音',
        code: '<ruby><rb>♥</rb><rt>Heart</rt></ruby>'
      },
      {
        name: 'rtc',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-rtc-element',
        class: 'textval',
        cndesc: '',
        code: '<ruby>♥<rtc><rt>Heart</rt></rtc></ruby>'
      },
      {
        name: 'rp',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-rp-element',
        class: 'textval',
        cndesc: '定义不支持 ruby 元素的浏览器所显示的内容',
        code: '<ruby>♥<rp>(</rp><rt>Heart</rt><rp>)</rp></ruby>'
      },
      {
        name: 'bdo',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element',
        class: 'textval',
        cndesc: '定义文本的方向',
        code: '<bdo dir="rtl">Right to left</bdo>'
      },
      {
        name: 'dd',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-dd-element',
        class: 'blockval',
        cndesc: '定义定义列表中项目的描述',
        code: '<dl><dt>Term</dt><dd>Definition...</dd></dl>'
      },
      {
        name: 'dl',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-dl-element',
        class: 'blockval',
        cndesc: '定义一个定义列表',
        code: '<dl><dt>Term</dt><dd>Definition...</dd></dl>'
      },
      {
        name: 'dt',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-dt-element',
        class: 'blockval',
        cndesc: '定义一个定义定义列表中的项目',
        code: '<dl><dt>Term</dt><dd>Definition...</dd></dl>'
      },
      {
        name: 'button',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-button-element',
        class: 'formval',
        cndesc: '定义按钮',
        code: '<button type="button">OK</button>'
      },
      {
        name: 'datalist',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-datalist-element',
        class: 'formval',
        cndesc: '规定了 input 元素可能的选项列表',
        code: '<datalist id="tech"><option ... /></datalist>'
      },
      {
        name: 'summary',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary',
        w3curl: 'https://www.w3.org/TR/html5/interactive-elements.html#the-summary-element',
        class: 'interactiveval',
        cndesc: '定义一个可见的标题。 当用户点击标题时会显示出详细信息',
        code: '<details><summary>...</summary>...</details>'
      },
      {
        name: 'header',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-header-element',
        class: 'documentval',
        cndesc: '定义一个文档头部部分',
        code: '<header><h1>Title</h1>Posted 1m ago</header>'
      },
      {
        name: 'h5',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h5>Heading</h5>'
      },
      {
        name: 'address',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-address-element',
        class: 'documentval',
        cndesc: '定义文档作者或拥有者的联系信息',
        code: '<address>Email us at <a href="..." /></address>'
      },
      {
        name: 'th',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-th-element',
        class: 'tableval',
        cndesc: '定义表格中的表头单元格',
        code: '<tr><th>One</th><th>Two</th></tr>'
      }
    ],
    [
      {
        name: 'style',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style',
        w3curl: 'https://www.w3.org/TR/html5/document-metadata.html#the-style-element',
        class: 'metaval',
        cndesc: '定义文档的样式信息',
        code: '<style>.title { color: red; }</style>'
      },
      {
        name: 'script',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script',
        w3curl: 'https://www.w3.org/TR/html5/semantics-scripting.html#the-script-element',
        class: 'metaval',
        cndesc: '定义客户端脚本',
        code: '<script>alert(1)</script>'
      },
      {
        name: 'dfn',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element',
        class: 'textval',
        cndesc: '定义定义项目',
        code: '<p><dfn id="def-html">HTML</dfn> is a standard for...</p>'
      },
      {
        name: 'u',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-u-element',
        class: 'textval',
        cndesc: '定义下划线文本',
        code: 'Text with a <u class="error">mistaek</u>.'
      },
      {
        name: 'bdi',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-bdi-element',
        class: 'textval',
        cndesc: '允许您设置一段文本，使其脱离其父元素的文本方向设置',
        code: '<p dir="ltr">Include some <bdi>شوكولاتة</bdi></p>'
      },
      {
        name: 'ins',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins',
        w3curl: 'https://www.w3.org/TR/html5/edits.html#the-ins-element',
        class: 'textval',
        cndesc: '定义被插入文本',
        code: 'They <ins>should</ins> not do that.'
      },
      {
        name: 'del',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del',
        w3curl: 'https://www.w3.org/TR/html5/edits.html#the-del-element',
        class: 'textval',
        cndesc: '定义被删除文本',
        code: 'They <del>should</del> not do that.'
      },
      {
        name: 'wbr',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr',
        w3curl: 'https://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element',
        class: 'textval',
        cndesc: '规定在文本中的何处适合添加换行符',
        code: '1800-<wbr />123<wbr />456'
      },
      {
        name: 'blockquote',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote',
        w3curl: 'https://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element',
        class: 'blockval',
        cndesc: '定义块引用',
        code: '<blockquote>Quoted content.</blockquote>'
      },
      {
        name: 'dialog',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog',
        w3curl: 'https://www.w3.org/TR/html5/interactive-elements.html#the-dialog-element',
        class: 'blockval',
        cndesc: '定义一个对话框或者窗口',
        code: '<dialog><p>Please subscribe.</p></dialog>'
      },
      {
        name: 'textarea',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-textarea-element',
        class: 'formval',
        cndesc: '定义多行的文本输入控件',
        code: '<textarea name="msg">Content...</textarea>'
      },
      {
        name: 'keygen',
        mdnurl: 'https://developer.mozilla.org/en/HTML/Element/keygen',
        w3curl: 'http://www.w3.org/TR/html5/rendering.html#the-keygen-element-0',
        class: 'formval',
        cndesc: '规定用于表单的密钥对生成器字段',
        code: '加密: <keygen name="security">'
      },
      {
        name: 'progress',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress',
        w3curl: 'https://www.w3.org/TR/html5/sec-forms.html#the-progress-element',
        class: 'formval',
        cndesc: '定义运行中的任务进度（进程）',
        code: '<progress value="60" total="100">60%</progress>'
      },
      {
        name: 'details',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details',
        w3curl: 'https://www.w3.org/TR/html5/interactive-elements.html#the-details-element',
        class: 'interactiveval',
        cndesc: '定义了用户可见的或者隐藏的需求的补充细节',
        code: '<details><p>...</p></details>'
      },
      {
        name: 'footer',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-footer-element',
        class: 'documentval',
        cndesc: '定义一个文档底部',
        code: '<footer>Copyright 2019</footer>'
      },
      {
        name: 'h6',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements',
        class: 'documentval',
        cndesc: '定义 HTML 标题',
        code: '<h6>Heading</h6>'
      },
      {
        name: 'article',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article',
        w3curl: 'https://www.w3.org/TR/html5/sections.html#the-article-element',
        class: 'documentval',
        cndesc: '定义一个文章内容',
        code: '<article><h1>Blog Post</h1>...</article>'
      },
      {
        name: 'td',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td',
        w3curl: 'https://www.w3.org/TR/html5/tabular-data.html#the-td-element',
        class: 'tableval',
        cndesc: '',
        code: '<tr><td>One</td><td>Two</td></tr>'
      }
    ],
    [
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' }
    ],
    [
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      {
        name: 'img',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-img-element',
        class: 'embedval',
        cndesc: '定义图像',
        code: '<img src="boat.png" alt="Sailing boat" />'
      },
      {
        name: 'picture',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-picture-element',
        class: 'embedval',
        cndesc: '包含零或多个 <source> 元素和一个 <img> 元素来为不同场景提供图像',
        code: '<picture><source srcset="..." /></picture>'
      },
      {
        name: 'iframe',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element',
        class: 'embedval',
        cndesc: '定义内联框架',
        code: '<iframe src="https://..."></iframe>'
      },
      {
        name: 'embed',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-embed-element',
        class: 'embedval',
        cndesc: '定义了一个容器，用来嵌入外部应用或者互动程序（插件）',
        code: '<embed type="..." src="movie.mov" />'
      },
      {
        name: 'object',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-object-element',
        class: 'embedval',
        cndesc: '定义嵌入的对象',
        code: '<object data="movie.swf" type="..."></object>'
      },
      {
        name: 'param',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-param-element',
        class: 'embedval',
        cndesc: '定义对象的参数',
        code: '<param name="something" value="..." />'
      },
      {
        name: 'video',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-video-element',
        class: 'embedval',
        cndesc: '定义一个音频或者视频',
        code: '<video controls src="m.mp4" poster="p.png" />'
      },
      {
        name: 'audio',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-audio-element',
        class: 'embedval',
        cndesc: '定义声音，比如音乐或其他音频流',
        code: '<audio src="m.mp3" autoplay controls />'
      },
      {
        name: 'source',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-source-element',
        class: 'embedval',
        cndesc: '定义media元素 (<video> 和 <audio>)的媒体资源',
        code: '<source src="audio.ogg" type="video/ogg" />'
      },
      {
        name: 'canvas',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas',
        w3curl: 'https://www.w3.org/TR/html5/semantics-scripting.html#the-template-element',
        class: 'embedval',
        cndesc: '通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）',
        code: '<canvas id="display"></canvas>'
      },
      {
        name: 'map',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-map-element',
        class: 'embedval',
        cndesc: '定义图像映射',
        code: '<map name="hero"><area .../><area .../></map>'
      },
      {
        name: 'area',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-area-element',
        class: 'embedval',
        cndesc: '定义图像地图内部的区域',
        code: '<area shape="circle" href="/home" coords="..." />'
      },
      {
        name: 'track',
        mdnurl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track',
        w3curl: 'https://www.w3.org/TR/html5/semantics-embedded-content.html#the-track-element',
        class: 'embedval',
        cndesc: 'track',
        code: '<track kind="subtitles" src="/captions.vtt" />'
      }
    ],
    [
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' },
      { name: '', mdnurl: '', w3curl: '', class: '', cndesc: '', code: '' }
    ]
  ]