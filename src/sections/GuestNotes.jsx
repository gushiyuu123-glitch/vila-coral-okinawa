import styles from "./GuestNotes.module.css";

const NOTES = [
  {
    stay: "2 nights / couple",
    location: "TOKYO",
    title: "初日は、何もしないことに少しだけ罪悪感がありました。",
    body: "予定を入れない旅に慣れていなかったので、最初は少しそわそわしました。でも2日目の朝、窓の外を見ながらコーヒーを飲んでいたら、今日はこのままでいいと思えました。観光の記憶より、部屋で何も急がなかった時間の方が残っています。",
    name: "A couple from Tokyo",
  },
  {
    stay: "1 night / family",
    location: "FUKUOKA",
    title: "子どもが寝たあとに、やっと旅行が始まった気がしました。",
    body: "家族旅行はいつも予定と荷物に追われがちですが、ここでは夜になってからの時間がよかったです。子どもが眠ったあと、部屋の明かりを少し落として、夫婦で外を眺めていました。特別なことをしたわけではないのに、その時間だけ妙に覚えています。",
    name: "A family from Fukuoka",
  },
  {
    stay: "1 night / solo",
    location: "OKINAWA",
    title: "遠くへ行かなくても、気持ちはちゃんと切り替わりました。",
    body: "県内からの滞在だったので、最初は旅行というより気分転換のつもりでした。でも夕方に部屋へ戻ったとき、少し遠くまで来たような感覚がありました。帰るころには、また仕事に戻れるくらいには整っていました。",
    name: "A local guest",
  },
];
function GuestNotes() {
  return (
    <section className={styles.guestNotes} aria-label="Guest notes">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>GUEST NOTES</p>

          <h2 className={styles.title}>
            <span>泊まったあとに、</span>
            <span>思い出す時間。</span>
          </h2>

          <p className={styles.lead}>
            Vila Coralで過ごした人たちの声。部屋のこと、朝のこと、
            何も決めずに過ごした時間のこと。
          </p>
        </div>

        <div className={styles.notes}>
          {NOTES.map((note, index) => (
            <article className={styles.note} key={note.title}>
              <div className={styles.meta}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{note.stay}</span>
                <span>{note.location}</span>
              </div>

              <h3 className={styles.noteTitle}>{note.title}</h3>

              <p className={styles.text}>{note.body}</p>

              <p className={styles.name}>{note.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuestNotes;