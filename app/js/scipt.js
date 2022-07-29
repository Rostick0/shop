function blogPageRender(page, htmlRender) {
    if (parseInt(page)) {
        htmlRender.innerHTML = `
                    <section class="section__blog blog-page">
                        <div class="section__big-title">
                            ДИзайн ОДЕЖДЫ
                        </div>
                        <div class="section__big-subtitle">
                            Мы занимаемся продажей своих вещей уже несколько лет, за это время мы успели исправить различные неточности и готовы конкурировать с лучшими брендами.
                        </div>
                        <div class="blog-page__content">
                            <div class="blog-page__image">
                                <img
                                class="blog-page__img lazy-loading"
                                src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAEALAAAAAAQAAkAAAIKjI+py+0Po5yUFQA7"
                                data-src="img/blog-page 1.png"
                                alt=""
                                >
                            </div>
                            <p class="blog-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил.
                            </p>
                            <div class="blog-page__image">
                                <img
                                class="blog-page__img lazy-loading"
                                src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAEALAAAAAAQAAkAAAIKjI+py+0Po5yUFQA7"
                                data-src="img/blog-page.png"
                                alt=""
                                >
                            </div>
                            <p class="blog-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил.
                            </p>
                            <p class="blog-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил.
                            </p>
                            <p class="blog-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил.
                            </p>
                        </div>
                    </section>
        `;
    }
}

function clothesPageRender(page, htmlRender) {
    if (parseInt(page)) {
        htmlRender.innerHTML = `
                <section class="section__clothes clothes-page">
                    <div class="clothes-page__top">
                        <nav class="clothes-page__nav">
                            <ul class="clothes-page__category">
                                <li class="clothes-page__category_item">
                                    <a class="clothes-page__category_item_link" href="/">
                                        Главная
                                    </a>
                                </li>
                                <li class="clothes-page__category_item">
                                    <a class="clothes-page__category_item_link" href="clothes.html">
                                        Проекты
                                    </a>
                                </li>
                                <li class="clothes-page__category_item">
                                    Casual stile
                                </li>
                            </ul>
                            <div class="clothes-page__location">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99984 2.13333C3.8769 2.13333 2.14977 3.84726 2.14977 5.95397C2.14977 6.13264 2.23606 7.15423 3.93967 9.72725C4.62591 10.7637 5.39687 11.7833 6.05371 12.6171C6.5054 12.0381 7.01059 11.3621 7.5059 10.6449C9.78414 7.34601 9.84991 6.08671 9.84991 5.95397C9.84991 3.84726 8.12278 2.13333 5.99984 2.13333ZM5.99984 0C9.31346 0 11.9997 2.66568 11.9997 5.95397C11.9997 9.20593 6.1008 16 6.00098 16C5.99987 16 5.99949 15.9992 5.99984 15.9975C6.03139 15.8434 0 9.24226 0 5.95397C0 2.66568 2.68622 0 5.99984 0Z" fill="#CFA47F"/>
                                </svg>                                        
                                г.Москва, Тверская улица, 22
                            </div>
                        </nav>
                        <div class="clothes-page__slider">
                            <div class="clothes-page__slider_actived">
                                <img src="img/project-image.png" alt="">
                            </div>
                            <ul class="clothes-page__images">
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb.png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (1).png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (2).png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (3).png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (4).png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (5).png" alt="">
                                </li>
                                <li class="clothes-page__images_item">
                                    <img
                                    class="lazy-loading"
                                    src="data:image/gif;base64,R0lGODlhBwAEAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAQAAAIEjI+pWwA7"
                                    data-src="img/project-thumb (6).png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clothes-page__bottom">
                        <div class="clothes-page__content">
                            <div class="section__big-title">
                                Стиль на каждый день
                            </div>
                            <p class="clothes-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.
                            </p>
                            <div class="clothes-page__image">
                                <img class="clothes-page__img" src="img/clothes-page.png" alt="">
                            </div>
                            <p class="clothes-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.
                            </p>
                            <div class="clothes-page__image">
                                <img class="clothes-page__img" src="img/clothes-page 1.png" alt="">
                            </div>
                            <p class="clothes-page__p">
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных.
                            </p> 
                        </div>
                        <div class="clothes-page__author">
                            <div class="clothes-page__author_image">
                                <img class="clothes-page__author_img" src="img/clothes_author.png" alt="">
                            </div>
                            <div class="clothes-page__role">
                                Главный стилист Елентева Оксана Дмитриевна
                            </div>
                            <div class="clothes-page__info">
                                Оксана-профессионал своего дела. У нее есть 2 высших образования, она проходила различные курсы для повышения квалификации. Стилист поможет вам с выбром вашей одежды.
                            </div>
                        </div>
                    </div>
                </section>
        `;
    }
}

const queryParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const companyRender = document.querySelector('.company__render');
const blogRender = document.querySelector('.blog__render');
const clothesRender = document.querySelector('.clothes__render');

if (queryParams.page && companyRender) {
    companyPageRender(queryParams.page, companyRender);
}

if (queryParams.id && blogRender) {
    blogPageRender(queryParams.id, blogRender)
}

if (queryParams.id && clothesRender) {
    clothesPageRender(queryParams.id, clothesRender)
}

const cartProduct = document.querySelectorAll('.cart__product');

function increment(count) {
    return ++count;
}

function descrement(count) {
    if (count <= 0) {
        return 0;
    }

    return --count;
}

if (cartProduct) {
    cartProduct.forEach((elem, index) => {
        const count = document.querySelectorAll(`.cart__product_number`)[index];

        let plus = document.querySelectorAll('.cart__product_increment')[index];
        let minus = document.querySelectorAll('.cart__product_decrement')[index];

        if (plus) {
            plus.addEventListener('click', e => count.value = increment(count.value))
        }

        if (minus) {
            minus.addEventListener('click', e => count.value = descrement(count.value))
        }
    })   
}

new LazyLoad({
    elements_selector: "img.lazy-loading"
});