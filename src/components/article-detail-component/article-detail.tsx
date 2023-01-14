import styles from "./article-detail.module.css";
import React, { Fragment } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowIcon from "../../media/arrow-left-icon";
export default function ArticleDetail() {
  return (
    <Fragment>
      <div className={styles.imageContainer}></div>
      <div className={styles.contentContainer}>
        <div className={styles.articleContainer}>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            sx={{ textAlign: "center", mt: "35px" }}
          >
            Lizards Lizards Lizards Lizards Lizards Lizards Lizards
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "50px 75px", textAlign: "start" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lorem ipsum
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            consequatur voluptates. Autem esse culpa assumenda porro deserunt
            iusto hic cum labore fugit quidem, adipisci ratione, reiciendis
            doloremque harum eaque fuga! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Corporis atque quidem ut officia beatae itaque
            facere! Fugit molestias qui aut doloribus consectetur perspiciatis
            et veniam repellat sequi ex, soluta distinctio nemo itaque nostrum
            est voluptates nisi libero magnam optio earum deleniti, recusandae
            quibusdam cupiditate? Sed, incidunt eius corporis culpa omnis
            voluptatem aliquid ipsa cupiditate qui veritatis. Earum magni libero
            consectetur obcaecati exercitationem error ad cum itaque tempore
            omnis repellendus ut facilis, quam repellat voluptatum dolorum
            minus, mollitia iure alias quidem ex tenetur voluptates iusto? Magni
            ea repellendus iste minima consequuntur odit, explicabo quisquam,
            cupiditate incidunt voluptate, asperiores qui numquam. Obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dignissimos vero consequatur quos vitae aut veniam, reprehenderit
            obcaecati! Excepturi earum nam officia possimus aliquam veniam
            optio? Voluptas alias libero voluptatibus. Vero perferendis officiis
            iure dolorem, repudiandae sed esse. Earum, doloremque? Ratione
            asperiores doloribus accusamus ut earum voluptate ad ipsam
            explicabo, assumenda, eos iste repellendus magni maxime dignissimos,
            exercitationem cum autem nihil rem aliquam magnam dolorem quis?
            Mollitia possimus cum, est enim necessitatibus suscipit dolor
            quidem, ad distinctio dolorum culpa, provident esse atque a autem
            incidunt nobis quae. Vitae iusto praesentium perspiciatis similique
            ipsam distinctio, accusamus exercitationem commodi delectus esse
            suscipit veritatis illum nam rerum vel in tempora ab voluptatem?
            Ratione eos corporis neque quis aperiam. Delectus dolorem quisquam
            in cumque saepe, magni alias excepturi facilis. Autem sint ratione,
            aspernatur deserunt sed sit voluptatum incidunt eum ipsum totam
            voluptas beatae facere repellendus odit obcaecati culpa error,
            aliquid nisi doloremque laborum fugit deleniti ea, repudiandae
            praesentium. Nesciunt velit quasi ullam, ipsa cumque corrupti,
            possimus reiciendis, a voluptatum alias harum magnam quam? Sunt
            ipsam deserunt blanditiis ullam, fugit eum voluptate praesentium
            repellat nihil officiis fugiat sequi veniam consequuntur ea deleniti
            nemo reiciendis laudantium doloribus? Eius suscipit, facilis
            deleniti cupiditate, at, asperiores amet a quos magni consequuntur
            dicta deserunt quia! Mollitia ea officiis incidunt dolorem. Voluptas
            a in asperiores, sapiente ducimus rerum magni excepturi repudiandae
            saepe porro omnis mollitia expedita autem earum, perferendis atque
            soluta consectetur est? Voluptatibus, natus sed. Dignissimos facere
            id in velit enim rem nesciunt consequatur sed dolorum veritatis
            soluta vero adipisci, ipsam iure dolorem quisquam est, optio dicta
            ducimus quo aliquid. Adipisci ab consequatur ipsum ducimus magnam
            perferendis deserunt beatae veniam repudiandae totam sed natus atque
            deleniti, itaque laboriosam facere quaerat blanditiis, asperiores
            inventore? Aut sequi rem a, odit unde aliquid nulla corrupti ipsam
            laborum! Rem dolor natus, provident sit illo voluptatem id
            perspiciatis animi aliquid incidunt, earum itaque, obcaecati
            dignissimos ex veritatis temporibus neque numquam? Exercitationem
            aliquam pariatur beatae veritatis in quo possimus odit esse
            molestiae maiores! Rem voluptatibus, corrupti odio fugiat enim,
            earum ullam numquam quaerat nam eaque vero totam aspernatur rerum
            beatae nostrum. Quas voluptatem impedit eligendi consectetur, omnis
            exercitationem iste qui velit? At quas nisi vero. Id porro alias
            consectetur quis recusandae rem officia, maiores ad iure, dolore
            laboriosam libero eveniet dignissimos esse est non ea animi earum
            commodi, aliquid inventore distinctio. Perferendis exercitationem,
            odio ducimus cumque, numquam optio hic culpa eius magnam vel dicta
            accusamus officiis quaerat. Neque, unde perspiciatis illum tempora
            distinctio officiis labore eos deserunt autem quos possimus, veniam
            quas ab doloribus cum sapiente magni alias non eaque? Ipsam ullam
            quo debitis illum quibusdam tempore deserunt alias eos
            exercitationem modi in hic inventore possimus reiciendis, facere,
            dolorum laboriosam. Eum magni sint laudantium ullam veniam quasi
            cupiditate cum earum numquam voluptas, temporibus labore quo
            praesentium necessitatibus? Reprehenderit aut sunt pariatur
            temporibus eaque id asperiores quam modi odio, possimus quisquam
            veniam, voluptates ducimus exercitationem magnam ut neque assumenda!
            Vitae perspiciatis, dignissimos ad eveniet qui minima blanditiis
            deleniti in iste sequi quis quam ut, quibusdam libero.
          </Typography>
        </div>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            mt: "35px",
            ml: "75px",
            mb: "45px",
          }}
        >
          <ArrowIcon />
          <Link to={"/"}>Back to home page</Link>
        </Button>
      </div>
    </Fragment>
  );
}
