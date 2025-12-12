---
title: 'Reactive Programming'
excerpt: 'Reactive Programming: Why and When?'
date: '2024-03-22'
author: "Halil Toksöz"
readTime: "5 min read"
imageUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
avatarUrl: "https://miro.medium.com/v2/resize:fit:2400/1*wZndSAUOIHqBXB53PR_iRw.jpeg"
---

# Reactive Programming

**Reaktif Programlama (Reactive Programming)**, veri akışları ve değişikliklerin sisteme yayılması ile ilgilenen deklaratif bir programlama paradigmasıdır. Bu yaklaşım, olay odaklı uygulamalarda verilerin zaman içinde nasıl değişebileceğini ve bu değişikliklere nasıl tepki vereceğini tanımlar.

Reaktif programlama, özellikle özellikle gerçek zamanlı veri işleme, yüksek trafikli web uygulamaları ve dağıtık sistemlerde (mikroservis mimarileri) gibi alanlarda kullanılmaktadır. Asenkron ve olay tabanlı doğası sayesinde, uygulamaların non-blocking bir şekilde birden fazla görevi eş zamanlı olarak yönetmesine imkan tanır. Bu da sistemlerin daha hızlı ve duyarlı olmasını sağlar.

Reaktif programlama, _observable (izlenen)_ ve _observer (izleyici)_ ilişkisi üzerine kuruludur.

## Neden ve Ne İçin Kullanılır?

Reaktif programlama, aşağıdaki durumlarda kullanışlıdır:

1. **Olay Odaklı Uygulamalar**: Tek sayfalı uygulamalar (single page applications), olaylar (events) üzerine kuruludur. Bu gibi uygulamalarda olay yönetimi önemlidir. Reaktif programlama, olayları deklaratif hale getirerek işleri basitleştirir. Finansal uygulamalar ya da sosyal medya uygulamaları da bunlara bir örnektir.
2. **Asenkron İşlemler**: Veri akışlarını asenkron olarak işlemek gerektiğinde reaktif programlama kullanılır. Örneğin, kullanıcı etkileşimleri, sunucu istekleri veya sensör verileri gibi durumlar.
3. **Hata Yönetimi**: Reaktif programlama, hata yönetimini kolaylaştırır. Hataları merkezi bir şekilde ele alabilir ve kodun daha güvenilir olmasını sağlayabiliriz.

## Observer Pattern ve Reactive Programming

**Observer Pattern,** bir nesnenin durumundaki değişiklikleri takip eden ve bu değişikliklere tepki veren _"Observer (Subscriber)"_ nesnelerine bildirimde bulunan bir tasarım kalıbıdır. _"one-to-many"_ ilişkiyi temsil eder. İlgili nesnenin durumunda bir değişiklik olursa, _Publisher_ bu değşikliği tüm bağımlılarına (_Subscriber/Observer_) bildirilir.

**Reactive Programming,** bir veri akışının değişikliklerini programın her seviyesine yayarak kolayca yayılmasını sağlayan genel bir paradigmadır. Bu, belirli bir desen veya varlık değil, bir düşünce tarzıdır.

## Kavramlar:

*   **Stream:** Stream (akış), zaman içinde bir dizi olay veya veri akışını temsil eder. Genellikle tek bir subscriber (observer) için veri yayar. Stream’lerde manipülasyon için operatörler daha düşük seviyede uygulanır. Node.js' deki Stream nesneleri buna bir örnek olabilir.
*   **Observables:** Observables, RP yaklaşımının bir parçasıdır. Nihayetinde bir _Data Stream_ olan bu yapı, Stream'leri abone olan Observer'lara yayınlayan nesnedir. Observables, RxJS gibi kütüphanelerde operatörlerle daha kolay manipüle edilebilir ve çok çeşitli operatörleri bulunmaktadır.
*   **Observer:** Observers, observables tarafından yayınlanan değerlere abone olan ve tepki gösteren (veriyi manipüle edebilen) nesnelerdir.
*   **Subject:** Hem Observer Hem de Observable özelliklerini gösterebilen, birden fazla Observer'a veri yayabilen (multicast) özel bir Observable türüdür.

### Stream vs Observables vs Subject

Stream'ler, veri akışlarının temsil edildiği dizilerdir. Observables, bu akışların üzerinde operasyonlar yapılmasını sağlayan ve değerleri zamanla yayınlayan nesnelerdir. Subject'lar ise observables'ın bir türü olup, değerleri birden fazla observer'a iletme yeteneğine sahiptir.

Temel fark, _observables'_ ın her abone için bağımsız bir akış yaratması (unicast), _subject'_ ların ise aynı akışı birden fazla abone ile paylaşabilmesidir (multicast).

## Best Practices, Tips & Tricks

Reaktif programlamanın Best Practices & Techniques arasında sayabileceğimiz, _immutable (değişmez)_ veri yapılarının kullanımı, _stateless (durumsuz)_ tasarımın benimsenmesi ve asenkron iletişimin tercih edilmesi yer alır. Ayrıca, _backpressure (geri basınç)_ mekanizmalarının etkin bir şekilde yönetilmesi ve bileşenler arası gevşek bağlantının korunması önemlidir.

## Kod Örnekleriyle Günlük Hayat Senaryoları

Reaktif programlama, günlük hayatta karşılaşabileceğimiz birçok senaryoda kullanılabilir. Örneğin, bir sosyal medya uygulamasında kullanıcıların gönderilerine anında tepki vermek veya bir stok takip sisteminde stok değişikliklerini gerçek zamanlı olarak izlemek için reaktif programlama teknikleri kullanılabilir. Bu tür senaryolar, sistemlerin kullanıcı etkileşimlerine hızlı ve etkin bir şekilde yanıt vermesini gerektirir ve reaktif programlama bu ihtiyacı karşılar.

1. **Sosyal Medya Uygulamasında Anında Tepki Verme**:
    *   Senaryo: Bir sosyal medya uygulamasında kullanıcılar gönderilere beğeni veya yorum yapabilir. Bu tepkiler anında diğer kullanıcılara yansıtılmalıdır.
    *   RxJS Kullanımı:
        *   Kullanıcıların gönderilere verdiği tepkileri bir **Observable** olarak temsil edebiliriz.
        *   Bu tepkileri dinlemek için **Observer**’lar oluştururuz.
        *   Kullanıcı bir gönderiye tepki verdiğinde, bu tepkiyi Observable’a ekleriz ve Observer’lara bildiririz.
        *   Örnek Kod:
            ```javascript
                // RxJS ile tepkileri yönetmek için gerekli paketi içe aktaralım
                const { Observable } = require('rxjs');
                // Tepkileri temsil eden Observable
                const reactions$ = new Observable((subscriber) => {
                  // Kullanıcı tepki verdiğinde bu kod çalışır
                  // Örneğin: Kullanıcı bir gönderiye beğeni yapar
                  subscriber.next('👍');
                });
                // Observer oluşturup tepkileri dinleyelim
                const reactionObserver = {
                  next: (reaction) => console.log(`Kullanıcı tepki verdi: ${reaction}`),
                };
                // Observer'ı Observable'a abone edelim
                reactions$.subscribe(reactionObserver);
            ```
2. **Stok Takip Sisteminde Gerçek Zamanlı Stok Değişiklikleri İzleme**:
    *   Senaryo: Bir e-ticaret platformunda stok takip sistemi, ürün stoklarının anlık olarak güncellenmesini sağlamalıdır.
    *   RxJS Kullanımı:
        *   Ürün stoklarındaki değişiklikleri bir **Observable** olarak temsil edebiliriz.
        *   Bu değişiklikleri dinlemek için **Observer**’lar oluştururuz.
        *   Ürün stokları güncellendiğinde, bu değişiklikleri Observable’a ekleriz ve Observer’lara bildiririz.
        *   Örnek Kod:
            ```javascript
                // Ürün stoklarını temsil eden Observable
                const stockChanges$ = new Observable((subscriber) => {
                  // Ürün stokları güncellendiğinde bu kod çalışır
                 // Örneğin: Bir ürünün stok miktarı azaldı
                  subscriber.next({ productId: 123, newStock: 50 });
                });
                // Observer oluşturup stok değişikliklerini dinleyelim
                const stockObserver = {
                  next: (change) => console.log(`Ürün stok güncellendi: ${JSON.stringify(change)}`),
                };
                // Observer'ı Observable'a abone edelim
                stockChanges$.subscribe(stockObserver);
            ```

  

### Temel RxJS Fonksiyonları

1. **`next`** **Fonksiyonu**:
    *   **Açıklama**: `next` fonksiyonu, bir Observable’daki veri akışına yeni bir değer eklemek için kullanılır.
    *   **Kullanım Nedeni**: Veri akışını yönetirken, Observable’a yeni veri eklemek veya güncellemek istediğimizde kullanılır.
    *   **Örnek Kod**:
        ```javascript
        const { Subject } = require('rxjs');
        const mySubject = new Subject();
        mySubject.next('Merhaba, Dünya!'); // Observable'a yeni bir değer ekler
        ```
2. **`pipe`** **Fonksiyonu**:
    *   **Açıklama**: `pipe` fonksiyonu, Observable üzerinde operatörleri birleştirmek için kullanılır. Operatör zinciri oluşturur.
    *   **Kullanım Nedeni**: Birden fazla operatörü sırayla uygulamak ve veri akışını dönüştürmek veya işlemek için kullanılır.
    *   **Örnek Kod**:
        ```javascript
        const { of } = require('rxjs');
        const { map, filter } = require('rxjs/operators');
        const source = of(1, 2, 3);
        const modifiedSource = source.pipe(
          map((val) => val * 2), // Her öğeyi ikiyle çarpfilter((val) => val > 2) // Sadece 2'den büyük olanları filtrele
        );
        modifiedSource.subscribe((val) => console.log(val)); // Çıktı: 6
        ```
3. **`subscribe`** **Fonksiyonu**:
    *   **Açıklama**: `subscribe` fonksiyonu, Observable’ı aktif hale getirir ve yayınlanan değerleri dinlemek için kullanılır.
    *   **Kullanım Nedeni**: Observable’dan gelen verileri dinlemek ve işlemek için kullanılır.
    *   **Örnek Kod**:
        ```javascript
        const { of } = require('rxjs');
        const source = of('Merhaba, Dünya!');
        const subscription = source.subscribe((val) => console.log(val)); 
        // Çıktı: Merhaba, Dünya!
        ```

Yani kısaca `next` ile veri ekleriz, `pipe` ile operatörleri birleştiririz ve `subscribe` ile veriyi dinleriz.

### En Çok Kullanılan RxJS Operatörleri

1. **`of`** **Operatörü**:
    *   **Açıklama**: `of` operatörü, JavaScript’ten aşina olduğumuz `.map()` fonksiyonu gibi davranır. Farkı; elinizde bir dizi olmasa bile **istediğiniz sayıda ve türde veriyi bir dizi gibi** bir araya getirip _Observable_ olarak yayınlar.
    *   **Örnek Kod**:
        ```javascript
        const { of } = require('rxjs');
        const source = of(1, 'mike', true, 4, { country: 'German' });
        const subscribe = source.subscribe((val) => console.log(val));
        // Çıktı: 1 mike true 4 { country: 'German' }
        ```
2. **`from`** **Operatörü**:
    *   **Açıklama**: `from` diğer nesneleri ve veri türlerini _Observable_’a dönüştürür. Bunlar Promise, dizi veya benzeri nesneler olabilir.
    *   **Örnek Kod**:
        ```javascript
        const { from } = require('rxjs');
        // Örnek olarak bir RESTful API'den veri çekelim 
        const fetchData = async () => {
          const response = await fetch('https://swapi.dev/api/people');
          const data = await response.json();
          return data.results;
        };
        const source = from(fetchData());
        const subscribe = source.subscribe((val) => console.log(val));
        ```
3. **debounceTime** **Operatörü**:
    *   **Açıklama**: Bir veri akışındaki değerleri belirli bir süre boyunca bekletir ve bu süre içinde yeni değer gelmezse son değeri yayınlar.
    *   **Örnek Kod**:
        ```javascript
        const { interval } = require('rxjs');
        debounceTime nst source = intervalBir veri akışındaki değerleri b1000); // Her saniye birbeyletir ve buayüre içinde neni değer geamezse son değe
        iconst subscribe = sourconst { fromEvent } = require('rxjs');
        const { debounceTime } = require('rxjs/operators');
        //örn-1: Kullanıcı bir arama kutusuna yazı yazdığında, her harf girişi sonrasında arama yapmak yerine, kullanıcının yazmayı bitirmesini bekleyip daha sonra arama yapalım.
        const searchInput = document.getElementById('search-input');
        const button = document.getElementById('my-button');
        // Arama kutusundaki değerleri dinleyelim
        const searchInput$ = fromEvent(searchInput, 'input');
        // debounceTime ile 300 ms bekleyip son değeri yayınlayalım
        const debouncedSearchInput$ = searchInput$.pipe(debounceTime(300));
        // Son değeri dinleyelim
        debouncedSearchInput$.subscribe((event) => {
          console.log('Arama kutusunda yazılan son değer:', event.target.value);
          // Burada arama yapma veya başka işlemler gerçekleştirilebilir
        });
        // -------------------------- örn-1 --------------------------
        // örn-2: Kullanıcı bir butona hızlıca tıkladığında, bu tıklamaları bir süre boyunca birleştirip tek bir tıklama olarak işleyelim.
        // Buton tıklamalarını dinleyelim
        const buttonClick$ = fromEvent(button, 'click');
        // debounceTime ile 500 ms bekleyip son tıklamayı yayınlayalım
        const debouncedButtonClick$ = buttonClick$.pipe(debounceTime(500));
        // Son tıklamayı dinleyelim
        debouncedButtonClick$.subscribe(() => {
          console.log('Butona son tıklama yapıldı.');
          // Burada buton tıklamasına bağlı işlemler gerçekleştirilebilir: HTTP request etc.
        });
        const { map } = require('rxjs/operators');
        const source = of(1, 2, 3);
        const modifiedSource = source.pipe(map((val) => val * 2));
        const subscribe = modifiedSource.subscribe((val) => console.log(val));
        // Çıktı: 2 4 6
        ```
4. **`filter`** **Operatörü**:
    *   **Açıklama**: Belirli bir koşulu sağlayan öğeleri filtreler.
    *   **Örnek Kod**:
        ```javascript
        const { of } = require('rxjs');
        const { filter } = require('rxjs/operators');
        const source = of(1, 2, 3, 4, 5);
        const filteredSource = source.pipe(filter((val) => val % 2 === 0));
        const subscribe = filteredSource.subscribe((val) => console.log(val));
        // Çıktı: 2 4
        ```

## Sonuç

Reaktif programlama, modern yazılım geliştirmenin vazgeçilmez bir parçası haline gelmiştir. Esneklik, ölçeklenebilirlik ve hızlı yanıt verme yeteneği ile uygulamaları daha etkili ve kullanıcı dostu kılar. Bu paradigmayı benimseyerek, yazılım projelerinizde yeni bir boyut açabilir ve daha dinamik sistemler oluşturabilirsiniz.

  

**Kaynaklar:**

1. RxJS Doc
2. Baeldung on Computer Science, "What Is Reactive Programming?".
3. Red Hat Developer, "5 Things to Know About Reactive Programming".
4. FreeCodeCamp, "What is Reactive Programming? Beginner's Guide to Writing Reactive Code".
5. Medium, "Understanding Reactive Programming: A Comprehensive Guide with Node.js and Java Examples".
6. RxJS: Observable vs Subject - Tutorial for Beginners.
7. Reactive Programming: Reactor Java best practices, tips, and tricks.
8. AppMaster, "The Role of Reactive Programming in Modern Software Architecture".
9. Refactoring Guru, Observer Pattern

  

Bu blog yazısı, Reaktif Programlamanın temel kavramlarını, neden ve ne zaman kullanılması gerektiğini, en iyi uygulamalarını ve günlük hayatta karşılaşılan senaryolarda nasıl uygulanabileceğini anlatmaktadır. Reaktif programlama, yazılım geliştirme süreçlerinde verimliliği ve kullanıcı deneyimini artırmak için kritik bir rol oynar. Umarım bu yazı, **Reaktif Programlama** hakkında daha derin bir anlayış kazanmanıza yardımcı olmuştur.