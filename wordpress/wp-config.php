<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jhs0907');

/** MySQL database username */
define('DB_USER', 'jhs0907');

/** MySQL database password */
define('DB_PASSWORD', 'paran0907!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jMDsb(/+u}{w(!JCAH~}Z~I;2kc3MDq*1uH(-?}n&i#eFteLs cbmy{Oy`q-|v9Y');
define('SECURE_AUTH_KEY',  'S]+JP`,`k:H$S1 %SkJjIh35p,]ufexBaJ7V4Wd[^5)^XfPK,4^*k{lz` M%F|B^');
define('LOGGED_IN_KEY',    'D0?@^Jd}mpC:-|=q6C5+1DBSQmM4ef4Lg;)3ouRh @66X]<Z}*{h&^~q&Xi yb~$');
define('NONCE_KEY',        '{1Uc@RR|CAvBp=RVC=rL <hA`lx(]s+QRj< ;3F/_)<M~lipe-^7TC`9i%O!#vPf');
define('AUTH_SALT',        'XLA-%&ZxAgWD()A%C*P8k?Yp_.MPxH.(Pq39{lI$KuZyf+p.RP~2w0V)bWuqHu-D');
define('SECURE_AUTH_SALT', 'wC7[.1,z:Zem?B7)H}Huhf!R97W!P-NL{iEBFwZX$gHi*+_}@$fQm.St OjXIjq>');
define('LOGGED_IN_SALT',   'K<%Fjc^rG>G>Xnf3lo^sv=Pb:]t_r@<d.4$Q_xb4Yf:5.P4 +# w/8TF2s`o97XP');
define('NONCE_SALT',       '`hi=c>,}5n(o4H6Fx9qxIb&p[3BnHVCZ`{H:5O_uqgzs$%kDf-%2st_E*UThq[:;');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
