from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    friend = request.args.get("to", "").strip()
    sender = request.args.get("from", "Your Friend").strip() or "Your Friend"

    if request.method == "POST":
        friend = request.form.get("friend", "").strip()

    return render_template("index.html", friend=friend, sender=sender)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
