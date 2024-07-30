import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
function ScrollAnimations() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245", "rgb(1, 245,13"]
  );
  return (
    <div>
      <div>
        <motion.div
          style={{
            scaleX,
            transformOrigin: "left",
            position: "sticky",
            background,
            top: 0,
            width: "100%",
            height: "20px",
          }}
        />
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            padding: "1.2rem",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam ratione soluta ipsam architecto ducimus ullam dolorem
            eius!Temporibus aperiam ratione soluta ipsam architecto ducimus
            ullam dolorem eius! Iste illum quae placeat possimus itaque iure
            autem accusantium veritatis fugit quaerat.ducimus ullam dolorem
            eius! Iste illum quae placeat possimus itaque iure autem accusantium
            veritatis fugit quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimations;
