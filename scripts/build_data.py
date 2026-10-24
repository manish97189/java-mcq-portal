"""Regenerates data.js from scripts/java_assignments.json.
Usage:  python3 scripts/build_data.py
Edit/add questions in the JSON (same format), then run this and redeploy."""
import json, re, pathlib
root = pathlib.Path(__file__).resolve().parent
data = json.loads((root / "java_assignments.json").read_text(encoding="utf-8"))

# normalise assignment names ("WEEK -7", "Assignment 4" ...) -> "Assignment N" in order of appearance
order, out = [], []
for i, q in enumerate(data):
    name = q["assignment"]
    if name not in order:
        order.append(name)
    n = order.index(name) + 1
    assert set(q["options"]) == set("abcd") and q["correct_answer"] in q["options"], f"bad question #{i}"
    out.append({
        "id": i + 1,
        "a": n,
        "q": q["question"],
        "o": [q["options"][k] for k in "abcd"],
        "c": "abcd".index(q["correct_answer"]),
    })
js = "window.QUESTIONS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n"
(root.parent / "data.js").write_text(js, encoding="utf-8")
print(f"{len(out)} questions, {len(order)} assignments -> data.js")
