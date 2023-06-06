Search.setIndex({"docnames": ["2D_robot", "3D_robot", "exp_MATLAB/documentation", "exp_others/franka_derivation", "exp_robot/cartpole", "exp_robot/doublependulum", "exp_robot/franka", "exp_robot/kuka_LBR_iiwa14", "exp_robot/kuka_LBR_iiwa7", "exp_robot/snakebot", "exp_theory/DH_method_and_comparison_with_exp", "exp_theory/product_of_exponentials_formula", "exp_user/code_structure", "exp_user/installation", "exp_user/introduction", "index"], "filenames": ["2D_robot.rst", "3D_robot.rst", "exp_MATLAB/documentation.rst", "exp_others/franka_derivation.rst", "exp_robot/cartpole.rst", "exp_robot/doublependulum.rst", "exp_robot/franka.rst", "exp_robot/kuka_LBR_iiwa14.rst", "exp_robot/kuka_LBR_iiwa7.rst", "exp_robot/snakebot.rst", "exp_theory/DH_method_and_comparison_with_exp.rst", "exp_theory/product_of_exponentials_formula.rst", "exp_user/code_structure.rst", "exp_user/installation.rst", "exp_user/introduction.rst", "index.rst"], "titles": ["2D Planar Robots", "3D Spatial Robots", "Code Documentations", "Derivation of Franka\u2019s Inertia Parameters", "Cart-Pole", "Double Pendulum", "Franka Emika", "KUKA LBR iiwa 14", "KUKA LBR iiwa 7", "SnakeBot", "Denavit-Hartenberg Parameters", "Product of Exponentials Formula", "Code Structure", "Installation", "Introduction", "Welcome to Exp[licit]-robotics!"], "terms": {"cart": [0, 5, 15], "pole": [0, 5, 15], "doubl": [0, 15], "pendulum": [0, 15], "snakebot": [0, 15], "franka": [1, 12, 15], "emika": [1, 15], "simpli": [2, 13], "inherit": [2, 12], "robotprimt": 2, "class": [2, 12], "The": [0, 1, 3, 4, 5, 7, 8, 9, 12, 13, 14], "origin": [3, 4, 5, 6, 9], "valu": [3, 6], "ar": [3, 4, 5, 6, 7, 8, 12, 13, 14], "from": [3, 6, 12, 13, 14], "figur": [3, 4, 5, 6, 7, 8, 9], "4": [3, 6, 7, 8, 9, 12, 13], "paper": 3, "ledezma": 3, "fernando": 3, "diaz": 3, "haddadin": 3, "sami": 3, "For": [3, 12, 13], "i": [1, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14], "th": [3, 9], "link": [3, 4, 5, 6, 7, 8, 9, 12], "mass": [3, 4, 5, 7, 9, 12], "m": [3, 4, 5, 6, 7, 8, 9, 12, 13], "time": [3, 12], "center": [3, 4], "locat": 3, "mc_x": 3, "mc_y": 3, "mc_z": 3, "6": [3, 6, 9], "paramt": 3, "tensor": 3, "matrix": [3, 7, 12, 13], "i_": [3, 6], "xx": 3, "xy": 3, "xz": 3, "yy": 3, "yz": 3, "zz": 3, "about": [3, 4, 6], "linkag": [3, 9], "kg": [3, 6], "cdot": 3, "2": [3, 4, 5, 6, 9, 12], "1": [3, 4, 5, 6, 7, 8, 9, 12, 13], "9707": [3, 6], "0": [3, 4, 5, 6, 7, 8, 9, 12, 13], "0193": 3, "0103": [3, 6], "4654": 3, "7470": [3, 6], "0002": [3, 6], "0086": [3, 6], "7503": [3, 6], "0201": [3, 6], "0092": [3, 6], "6469": [3, 6], "0020": 3, "0186": 3, "0023": 3, "0085": [3, 6], "0040": [3, 6], "0281": [3, 6], "0008": [3, 6], "0265": [3, 6], "3": [3, 6, 7, 8, 12, 13], "2286": [3, 6], "0888": 3, "1267": 3, "2147": 3, "0565": [3, 6], "0082": [3, 6], "0055": [3, 6], "0529": [3, 6], "0044": [3, 6], "0182": [3, 6], "5879": [3, 6], "1908": 3, "3746": 3, "0985": 3, "0677": [3, 6], "0277": [3, 6], "0039": [3, 6], "0324": [3, 6], "0016": [3, 6], "0776": [3, 6], "5": [3, 4, 5, 6, 9], "2259": [3, 6], "0147": 3, "0503": 3, "0471": 3, "0394": [3, 6], "0015": [3, 6], "0046": [3, 6], "0315": [3, 6], "0022": [3, 6], "0109": [3, 6], "6666": [3, 6], "1002": 3, "0235": 3, "0175": 3, "0025": [3, 6], "0001": [3, 6], "0106": [3, 6], "0118": [3, 6], "7": [1, 3, 6, 7, 12, 15], "4655": [3, 6], "0004": [3, 6], "0031": [3, 6], "1453": 3, "0308": [3, 6], "0007": [3, 6], "0284": [3, 6], "0005": [3, 6], "0067": [3, 6], "inerti": [3, 4, 5, 9], "describ": 3, "respect": [3, 6], "frame": [3, 4, 5, 6, 9], "joint": [3, 7, 12], "thi": [3, 4, 5, 6, 7, 8, 9, 12, 13], "defin": [3, 12], "denavit": [3, 15], "hartenberg": [3, 15], "dh": 3, "can": [0, 1, 3, 4, 6, 7, 8, 9, 12, 13, 14], "found": [3, 6, 7, 8, 13], "websit": 3, "shown": [3, 4, 5, 6, 7, 8, 9, 12], "below": [3, 4, 5, 6, 7, 8, 9, 12], "d": 3, "alpha": 3, "rad": 3, "theta": 3, "333": [3, 6], "theta_1": 3, "pi": 3, "theta_2": 3, "316": 3, "theta_3": 3, "0825": [3, 6], "theta_4": 3, "384": 3, "theta_5": 3, "theta_6": 3, "088": 3, "theta_7": 3, "let": 3, "attach": [3, 4, 5, 6, 7, 8, 9], "denot": 3, "relat": 3, "between": [3, 13], "h_": 3, "begin": [3, 6], "bmatrix": [3, 6], "co": 3, "theta_i": 3, "sin": 3, "a_i": 3, "alpha_i": 3, "d_i": 3, "end": [3, 4, 6, 12], "subscript": 3, "moreov": [3, 4], "equal": 3, "fix": [3, 6, 7, 8], "we": [3, 5, 7, 9, 12, 13], "find": 3, "concaten": 3, "align": 3, "vdot": [3, 9], "result": 3, "plot": 3, "exp": [0, 1, 3, 13, 14], "licit": [0, 1, 3, 13, 14], "right": 3, "consist": [3, 4, 9], "left": 3, "com": [3, 13], "express": [3, 6], "mathbf": 3, "c": [1, 3, 7, 14, 15], "_i": 3, "c_": 3, "x": 3, "y": 3, "z": 3, "tabl": 3, "abov": [3, 9], "need": [3, 7, 13], "map": 3, "thu": 3, "h_i": 3, "posit": [3, 4, 13], "detail": [3, 6], "its": [3, 12], "post": [3, 6], "section": 3, "final": 3, "moment": [3, 4], "ax": [3, 6, 12], "repres": 3, "To": [3, 4, 5, 6, 7, 8, 9, 13], "us": [0, 1, 3, 4, 5, 7, 9, 12, 13, 14], "follow": [0, 1, 3, 4, 5, 6, 7, 8, 9, 12, 13], "r": 3, "text": 3, "t": [3, 12, 13], "In": [3, 9], "equat": [3, 12], "so": [3, 13], "which": [3, 12, 13], "h": [3, 7, 12], "eventu": 3, "give": 3, "u": 3, "robot": [4, 5, 6, 7, 8, 9, 12, 13, 14], "one": [4, 12], "frequent": 4, "academia": [4, 5], "geometr": [4, 5, 9, 14], "A": [4, 13], "point": [4, 5, 6, 9], "m_c": 4, "length": [4, 5, 9, 12], "l_p": 4, "m_p": 4, "note": [1, 4, 6, 12, 13], "system": 4, "e": [4, 6, 12], "each": [4, 9, 12], "ident": 4, "inertia": [4, 15], "neglect": 4, "stationari": [4, 5, 6, 9], "coordin": [4, 5, 6, 9], "": [4, 5, 6, 7, 9, 12, 15], "o": [4, 5, 6, 9], "type": [4, 5, 6, 9, 13], "twist": [4, 5, 6, 9, 12], "axi": [4, 5, 6, 9], "direct": [4, 5, 6, 9], "prismat": 4, "revolut": [4, 5, 6], "construct": [4, 5, 6, 7, 8, 9, 10, 11], "run": [4, 5, 6, 7, 8, 9, 12, 13], "mc": 4, "mp": 4, "lp": 4, "cartpol": 4, "init": [4, 5, 6, 7, 8, 9, 12, 13], "anim": [4, 5, 6, 7, 8, 9, 12], "visual": [4, 5, 6, 7, 8, 9, 12], "dimens": [4, 5, 6, 7, 8, 9, 12], "xlim": [4, 5, 6, 7, 8, 9, 12], "ylim": [4, 5, 6, 7, 8, 9, 12], "attachrobot": [4, 5, 6, 7, 8, 9, 12], "output": [4, 5, 6, 7, 8, 9], "should": [4, 5, 6, 7, 8, 9], "look": [4, 5, 6, 7, 8, 9], "like": [4, 5, 6, 7, 8, 9], "often": 5, "call": [5, 12, 14], "acrobot": 5, "heavili": [5, 12], "first": [5, 12, 13], "m_1": 5, "l_1": [5, 9], "second": 5, "m_2": 5, "l_2": [5, 9], "here": [5, 6, 9, 12, 13], "assum": [5, 9, 13], "uniform": [5, 9], "distribut": [5, 9], "m1": 5, "m2": 5, "l1": 5, "l2": 5, "doublependulum": 5, "kinemat": [6, 7, 8, 12], "redund": [6, 7, 8], "dof": [6, 7, 8, 9], "base": [6, 7, 8, 14], "depict": 6, "com1": 6, "0021": 6, "2394": 6, "com2": 6, "0036": 6, "3618": 6, "com3": 6, "0275": 6, "0392": 6, "5825": 6, "com4": 6, "0293": 6, "7534": 6, "com5": 6, "0120": 6, "0410": 6, "9946": 6, "com6": 6, "0601": 6, "0105": 6, "0189": 6, "com7": 6, "0883": 6, "9339": 6, "all": [6, 12, 13], "deriv": [6, 12, 15], "refer": [6, 13], "j1": [6, 9], "rev": [6, 9], "3330": 6, "j2": [6, 9], "j3": [6, 9], "6490": 6, "j4": 6, "649": 6, "j5": 6, "0330": 6, "j6": 6, "j7": 6, "0880": 6, "stand": 6, "given": 6, "hat": 6, "_x": 6, "_y": 6, "_z": 6, "matric": [6, 12], "i_i": 6, "phantom": 6, "object": [6, 7, 8, 12], "high": [6, 7, 8], "qualiti": [6, 7, 8], "set": [6, 7, 8, 12, 13], "size": [6, 7, 8], "zlim": [6, 7, 8, 12], "an": [6, 7, 8, 12], "applic": [6, 7, 8, 12, 13], "under": [6, 7, 8, 10, 11, 13], "main_franka": [6, 12], "introduc": [], "iiwa": [1, 12, 15], "14": [1, 12, 15], "ha": [9, 12, 13], "degre": [], "freedom": [], "basi": [7, 8], "0140": [], "2545": [], "4040": [], "0030": [], "4240": [], "8900": [], "0190": [], "6905": [], "5400": [], "0090": [], "8660": [], "8200": [], "0130": [], "0585": [], "7600": [], "1960": [], "5000": [], "2706": [], "4200": [], "1525": [], "3600": [], "36": [], "5925": [], "0110": [], "7800": [], "78": [], "9925": [], "0620": [], "1800": [], "18": [], "2596": [], "theoret": [], "background": [], "present": [], "chosen": [], "number": 9, "along": [], "_1": [], "_2": [], "_3": [], "0690": [], "0710": [], "0200": [], "0800": [], "0100": [], "0600": [], "0400": [], "0300": [], "0070": [], "0060": [], "0050": [], "0003": [], "code": [6, 7, 8, 15], "indic": [], "payload": [], "rather": [], "than": 12, "0187": [], "2541": [], "7426": [], "4225": [], "9464": [], "0195": [], "6509": [], "5451": [], "0091": [], "8260": [], "6376": [], "0000": [], "0135": [], "0185": [], "7140": [], "0196": [], "1571": [], "4272": [], "000": [], "2306": [], "4219": [], "011": [], "340": [], "34": [], "5525": [], "740": [], "74": [], "952": [], "062": [], "140": [], "2196": [], "2400": [], "0240": [], "0128": [], "0468": [], "0282": [], "0101": [], "0270": [], "0160": [], "creat": [7, 9, 12, 13, 14], "arbitrari": 9, "n": 9, "where": 9, "pass": [9, 12], "constructor": [7, 9], "m_i": 9, "l_i": 9, "jn": 9, "sum_": 9, "nq": [7, 9, 12], "l": 9, "m_arr": 9, "ones": 9, "arrai": 9, "l_arr": 9, "current": [7, 10, 11, 12, 13, 14], "core": 12, "softwar": [12, 13, 14], "robotprimit": 12, "parent": 12, "It": 12, "provid": [7, 12, 13], "member": [7, 12], "function": [7, 12], "g": 12, "getforwardkinemat": [7, 12], "getspatialjacobian": 12, "gethybridjacobian": [7, 12], "getbodyjacobian": 12, "getmassmatrix": [7, 12], "paramet": [12, 15], "By": 12, "new": [7, 12], "share": 12, "attribut": 12, "bring": 12, "dynam": 12, "properti": 12, "rotat": 12, "etc": 12, "also": [1, 12, 13, 14], "accept": 12, "symbol": 12, "argument": 12, "featur": 12, "help": 12, "control": [12, 13], "method": [7, 12], "requir": 12, "analyt": 12, "formul": 12, "motion": 12, "adapt": [12, 13], "while": [12, 13], "support": 12, "variou": 12, "show": 12, "initi": 12, "gener": 12, "configur": [7, 12], "2d": [12, 15], "3d": [12, 15], "reli": 12, "graphic": 12, "patch": 12, "light": 12, "option": 12, "input": 12, "allow": 12, "record": 12, "video": 12, "adjust": 12, "playback": 12, "speed": 12, "At": 12, "simul": [12, 14], "q": [7, 12], "updat": [12, 13], "updatekinemat": 12, "user": [12, 13], "simpl": [7, 12], "default": 12, "loop": 12, "real": 12, "cyclic": 12, "start": [7, 12, 13], "simtim": 12, "tic": 12, "your": [7, 12, 13], "do": 12, "go": 12, "faster": 12, "toc": 12, "dt": 12, "noth": 12, "calcul": [7, 12, 13], "trajectori": 12, "law": 12, "integr": 12, "specif": 12, "implement": 12, "imped": 12, "move": 12, "effector": 12, "around": 12, "circular": 12, "ani": [12, 13], "pre": 12, "built": 12, "ode45": 12, "have": 13, "access": 13, "recent": 13, "version": [13, 14], "wa": 13, "test": 13, "after": 13, "r2022a": 13, "issu": 13, "older": 13, "pleas": 13, "github": [13, 14], "clone": 13, "our": [13, 14], "repositori": [13, 14], "git": 13, "http": 13, "set_up_your_directori": 13, "onc": 13, "download": 13, "complet": 13, "folder": 13, "setup": 13, "script": 13, "includ": [7, 13], "subfold": 13, "you": 13, "command": [7, 13], "window": 13, "If": 13, "line": 13, "appear": 13, "mose": [13, 14], "nah": [13, 14], "johann": [13, 14], "lachner": [13, 14], "2022": 13, "2023": 13, "io": 13, "welcom": 14, "model": 14, "varieti": 14, "algorithm": 14, "behind": 14, "differenti": 14, "concept": 14, "product": [14, 15], "exponenti": [14, 15], "formula": [14, 15], "maintain": 14, "two": 14, "research": 14, "newman": 14, "lab": 14, "massachusett": 14, "institut": 14, "technologi": 14, "mit": 14, "matlab": [0, 1, 14, 15], "avail": [1, 14], "instal": [14, 15], "explicit": [7, 12, 15], "cpp": [7, 12, 13], "py": [14, 15], "publish": 14, "soon": [1, 14], "introduct": 15, "tba": 15, "structur": 15, "exampl": 12, "planar": 15, "spatial": 15, "index": 15, "search": 15, "page": 15, "www": [], "en": [], "industri": [], "allign": [], "kuka": [1, 12, 13, 15], "lbr": [1, 12, 15], "iiwa14": [7, 12], "iiwa7": 8, "main_iiwa14": 7, "main_iiwa7": 8, "client": [7, 13], "mylbrclient": 7, "mylbr": [7, 12], "trei": [7, 12], "homogen": [7, 12], "transform": [7, 12], "hybrid": [7, 12], "jacobian": [7, 12], "6x7": [7, 12], "j": [7, 12], "eigen": [7, 12, 13], "vectorxd": [7, 12], "zero": [7, 12], "fri": [1, 14, 15], "dure": 12, "stabl": [13, 14], "prototyp": 14, "file": [7, 13], "main": 13, "directori": 13, "them": 13, "make": 13, "termin": 13, "activ": [7, 13], "develop": 13, "might": 13, "unstabl": 13, "formal": 13, "announc": 13, "made": 13, "vector": 13, "ad": 13, "submodul": 13, "compil": 13, "As": 13, "contain": 13, "turn": 13, "recurs": 13, "alwai": 13, "check": 13, "remot": 13, "done": 13, "f": 13, "makefil": 13, "lib": 13, "head": 13, "intial": 13, "sourc": [7, 13], "media": 13, "flang": 13, "touch": 13, "librari": 13, "myfricli": 13, "establish": 13, "state": 13, "machin": 13, "commun": 13, "pc": 13, "sunris": 13, "upload": 13, "extract": 13, "17": 13, "doesn": 13, "work": 13, "readm": 13, "insid": 13, "re": 13, "get": [7, 13], "basic": [7, 13], "qt": 13, "creator": 13, "open": 13, "cmake": 13, "id": 13, "basic_app": 13, "src": 13, "iir": 7, "filter": 7, "coeffici": 7, "determin": 7, "winfilt": 7, "build": 7, "friction": 7, "compens": 7, "befor": 7, "send": 7, "torqu": 7, "add": 7, "mean": 7, "smooth": 7, "out": 7, "signal": 7, "forward": 7, "print": 7, "effort": 7, "via": 7, "other": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"2d": 0, "planar": 0, "robot": [0, 1, 15], "3d": 1, "spatial": 1, "code": [2, 4, 5, 9, 12], "document": [2, 15], "tabl": [2, 13, 15], "content": [2, 13], "The": [2, 6], "whole": 2, "test": 2, "deriv": 3, "franka": [3, 6], "": 3, "inertia": [3, 6], "paramet": [3, 4, 5, 6, 9, 10], "cart": 4, "pole": 4, "initi": [4, 5, 6, 9], "configur": [4, 5, 6, 9], "joint": [4, 5, 6, 9], "exampl": [4, 5, 6, 7, 8, 9], "doubl": 5, "pendulum": 5, "emika": 6, "locat": 6, "center": 6, "mass": 6, "com": 6, "tensor": 6, "each": 6, "linkag": 6, "kuka": [7, 8], "lbr": [7, 8], "iiwa14": [], "princip": [], "ax": [], "moment": [], "iiwa7": [], "snakebot": 9, "denavit": 10, "hartenberg": 10, "product": 11, "exponenti": 11, "formula": 11, "structur": 12, "applic": [], "exp": [6, 7, 8, 12, 15], "licit": [6, 7, 8, 12, 15], "matlab": [6, 7, 8, 12, 13], "instal": 13, "explicit": 13, "c": [12, 13], "tba": 13, "py": 13, "introduct": 14, "welcom": 15, "user": 15, "theori": 15, "other": 15, "indic": 15, "fri": [7, 13], "cpp": [], "iiwa": [7, 8], "14": 7, "7": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Code Documentations": [[2, "code-documentations"]], "Table of Contents": [[2, "table-of-contents"], [13, "table-of-contents"]], "The whole code TEST": [[2, "the-whole-code-test"]], "Derivation of Franka\u2019s Inertia Parameters": [[3, "derivation-of-franka-s-inertia-parameters"]], "Denavit-Hartenberg Parameters": [[10, "denavit-hartenberg-parameters"]], "Product of Exponentials Formula": [[11, "product-of-exponentials-formula"]], "Initial Configuration and Joint Parameters": [[6, "initial-configuration-and-joint-parameters"], [4, "initial-configuration-and-joint-parameters"], [5, "initial-configuration-and-joint-parameters"], [9, "initial-configuration-and-joint-parameters"]], "Franka Emika": [[6, "franka-emika"]], "The Locations of Center of Mass (CoM)": [[6, "the-locations-of-center-of-mass-com"]], "Inertia Tensor of each Linkage": [[6, "inertia-tensor-of-each-linkage"]], "Example Exp[licit]-MATLAB": [[6, "example-exp-licit-matlab"], [7, "example-exp-licit-matlab"], [8, "example-exp-licit-matlab"]], "Cart-Pole": [[4, "cart-pole"]], "Example code": [[4, "example-code"], [5, "example-code"], [9, "example-code"]], "Double Pendulum": [[5, "double-pendulum"]], "SnakeBot": [[9, "snakebot"]], "Installation": [[13, "installation"]], "Explicit-MATLAB": [[13, "explicit-matlab"]], "Explicit-C++": [[13, "explicit-c"]], "Explicit-FRI": [[13, "explicit-fri"]], "Explicit-py (TBA)": [[13, "explicit-py-tba"]], "Introduction": [[14, "introduction"]], "Code Structure": [[12, "code-structure"]], "Structure of Exp[licit]-MATLAB": [[12, "structure-of-exp-licit-matlab"]], "Structure of Exp[licit]-C++": [[12, "structure-of-exp-licit-c"]], "2D Planar Robots": [[0, "d-planar-robots"]], "3D Spatial Robots": [[1, "d-spatial-robots"]], "KUKA LBR iiwa 14": [[7, "kuka-lbr-iiwa-14"]], "Example Exp[licit]-FRI": [[7, "example-exp-licit-fri"]], "KUKA LBR iiwa 7": [[8, "kuka-lbr-iiwa-7"]], "Welcome to Exp[licit]-robotics!": [[15, "welcome-to-exp-licit-robotics"]], "User Documentation": [[15, null]], "Robots": [[15, null]], "Theory": [[15, null]], "Others": [[15, null]], "Indices and tables": [[15, "indices-and-tables"]]}, "indexentries": {}})