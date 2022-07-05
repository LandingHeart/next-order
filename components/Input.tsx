import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/input.module.css";

export default function SearchBar(props: any) {
  return (
    <form className={styles.form_search__bar}>
      <span>
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </span>

      <input className={styles.search_box} />
    </form>
  );
}
